const core = require('@actions/core');
const fetch = require('node-fetch');

const DIGITAL_OCEAN_API_URL = 'http://api.digitalocean.com/v2/apps';

const getApp = async (token, env) => {
  const response = await fetch(DIGITAL_OCEAN_API_URL, {
    headers: {
      authorization: `Bearer ${token}`,
    }
  })
  const doData = await response.json();
  const app = doData.apps.find(app => app.spec.name.includes(env));
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

    core.info(`Fetching apps...`);
    const app = await getApp(token, env);
    core.info(`Found app: ${app.spec.name}`);

    const tag = core.getInput('tag');
    core.info(`New deploy Tag: ${tag}`);

    const modifiedServices = parseServices(core.getInput('services'));
    core.info(`Found ${modifiedServices.length} modified services`);

    for (const service of modifiedServices) {
      core.info(`Updating ${service}...`);
      const serviceIndex = app.spec.services.findIndex(s => s.name.includes(service.replace(/"/g, '')));
      if (serviceIndex > -1) {
        app.spec.services[serviceIndex].image = { ...app.spec.services[serviceIndex].image, tag };
        core.info(`Updated ${service} image to ${tag}`);
      }
    }

    if (modifiedServices.length > 0) {
      core.info(`Updating app `);
      core.info(`New spec services: ${JSON.stringify(app.spec.services)}`);
      const update = await updateApp(token, app.id, { spec: app.spec });
      core.info(`Update status: ${update.status}`);

      if (update.status !== 200) {
        throw new Error(`Update failed: ${JSON.stringify(update.data)}`);
      }

      core.info(`Update data: ${JSON.stringify(update.data)}`);
    }

    core.setOutput('result', 'success');
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
