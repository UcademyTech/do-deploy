import 'cross-fetch/polyfill';
import { getInput, info, setOutput, setFailed } from '@actions/core';


async function run() {
  try {
    const token = getInput('token');
    info('Setting up DigitalOcean API Token');

    info(`Fetching apps...`);
    const data = await fetch({
      url: 'https://api.digitalocean.com/v2/apps',
      method: "GET",
      headers: {
        authorization: token
      }
    })

    const apps = await data.json();


    info(`Found ${apps?.services?.length} apps`);

    const tag = getInput('tag');
    info(`New deploy Tag: ${tag}`);

    const modifiedApps = getInput('apps').split(',').map(app => app.trim());
    info(`Found ${modifiedApps.length} app/s`);

    setOutput('result', 'success');
  } catch (error) {
    setFailed(error.message);
  }
}

run();
