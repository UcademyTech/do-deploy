const core = require('@actions/core');

const fetchApps = async (token) => {
  const { data } = await fetch('https://api.digitalocean.com/v2/apps', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return data
}


async function run() {
  try {
    const token = core.getInput('token');
    core.info('Setting up DigitalOcean API Token');

    const tag = core.getInput('tag');
    core.info(`New deploy Tag: ${tag}`);

    core.info(`Fetching apps...`);
    const apps = await fetchApps(token);

    const modifiedApps = core.getInput('apps').split(',').map(app => app.trim());
    core.info(`Found ${modifiedApps.length} app/s`);

    core.setOutput('result', 'success');
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
