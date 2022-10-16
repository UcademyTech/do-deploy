const core = require('@actions/core');
const fetch = require('cross-fetch/polyfill')


async function run() {
  try {
    const token = core.getInput('token');
    core.info('Setting up DigitalOcean API Token');

    core.info(`Fetching apps...`);
    const { data } = await fetch({
      url: 'https://api.digitalocean.com/v2/apps',
      method: "GET",
      headers: {
        authorization: token
      }
    })

    core.info(`Found ${data.apps.length} apps`);

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
