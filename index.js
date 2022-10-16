const core = require('@actions/core');
const fetch = require('node-fetch');


async function run() {
  try {
    const token = core.getInput('token');
    core.info('Setting up DigitalOcean API Token');

    core.info(`Fetching apps...`);
    const data = await fetch('http://api.digitalocean.com/v2/apps', {
      headers: {
        authorization: token
      }
    })

    const apps = await data.json();

    core.info(`Found ${apps?.services?.length} apps`);

    const tag = core.getInput('tag');
    core.info(`New deploy Tag: ${tag}`);

    const modifiedApps = core.getInput('apps').split(',').map(app => app.trim());
    core.info(`Found ${modifiedApps.length} app/s`);

    core.setOutput('result', 'success');
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
