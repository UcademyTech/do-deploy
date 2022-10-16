const core = require('@actions/core');
const fetch = require('node-fetch');

const getApp = async (token, env) => {
  const response = await fetch('http://api.digitalocean.com/v2/apps', {
    headers: {
      authorization: `Bearer ${token}`,
    }
  })
  const doData = await response.json();
  const app = doData.apps.find(app => app.spec.name.includes(env));
  return app
}

const updateApp = async (token, id, app) => {
  const response = await fetch(`http://api.digitalocean.com/v2/apps/${id}`, {
    method: 'PUT',
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(app),
  })
  return { status: response.status, data: await response.json() };
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

    const modifiedServices = core.getInput('services').replace("[", "").replace("]").split(',').map(app => app.trim());
    core.info(`Found ${modifiedServices.length} modified services`);

    for (const service of modifiedServices) {
      core.info(`Updating ${service}...`);
      const serviceIndex = app.spec.services.findIndex(s => s.name.includes(service));
      if (serviceIndex > -1) {
        app.spec.services[serviceIndex].image = tag;
      }
    }

    if (modifiedServices.length > 0) {
      core.info(`Updating app...`);
      core.info(`New space: ${JSON.stringify(app.spec)}`);
      const update = await updateApp(token, app.id, { spec: app.spec });
      core.info(`Update status: ${update.status}`);
      core.info(`Update data: ${JSON.stringify(update.data)}`);
    }

    core.setOutput('result', 'success');
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
