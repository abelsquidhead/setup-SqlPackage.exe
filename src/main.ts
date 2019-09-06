import * as core from '@actions/core';

async function run() {
  try {
    const myInput = core.getInput('myInput');
    core.debug(`Hello ${myInput}`);
    core.error('ok, here is my error')
    core.warning('ok, here is a warning')

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
