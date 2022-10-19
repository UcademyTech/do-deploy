const core = require('@actions/core');
const fetch = require('node-fetch');

const DIGITAL_OCEAN_API_URL = 'http://api.digitalocean.com/v2/apps';

const getAppByService = async (token, service) => {
  const response = await fetch(DIGITAL_OCEAN_API_URL, {
    headers: {
      authorization: `Bearer ${token}`,
    }
  })
  const doData = await response.json();
  const app = doData.apps.find(app => app.spec.name.includes(service));
  return app
}

const updateApp = async (token, id, app) => {
  const response = await fetch(`${DIGITAL_OCEAN_API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(app),
  })
  return { status: response.status, data: await response.json() };
}

const parseServices = (services) => {
  return services.replace("[", "").replace("]", "").split(',').map(app => app.trim())
}

async function run() {
  try {
    const env = core.getInput('env');
    core.info(`Env: ${env}`);

    const token = core.getInput('token');
    core.info('Setting up DigitalOcean API Token');

    const services = parseServices(core.getInput('services'));
    core.info(`Modified services: ${services}`);

    for(const service of services) {
      const s = service.replace(/"/g, '')
      const app = await getAppByService(token, s);
      core.info(`Found app: ${app.spec.name}`);

      core.info(`Updating ${service} >>> ${env}...`);
      const serviceIndex = app.spec.services.findIndex(s => s.name.includes(s));

      if (serviceIndex > -1) {
        
        app.spec.services[serviceIndex].image = { ...app.spec.services[serviceIndex].image, tag };
        core.info(`Image tag of service ${service} updated to ${tag}`);

        const { status, data } = await updateApp(token, app.id, { spec: app.spec });

        core.info(`Log >>> ${JSON.stringify(data)} `);

        if (status === 200) core.info(`Updated ${service} >>> ${env}`);
        
        core.info(`Status: ${status === 200 
          ? `service ${service} updated sucessfuly with tag ${tag} ✅`  
          : `failed updating service ${service} ❌`}`);
        if (status !== 200) throw new Error(`Update failed: ${JSON.stringify(data)}`);

      }
    }
    core.setOutput('result', 'success');
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
