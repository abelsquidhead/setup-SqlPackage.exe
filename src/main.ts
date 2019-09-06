import * as core from '@actions/core';
import SqlPackageExe = require("./SqlPackage");

async function run() {
  try {
    const myInput = core.getInput('myInput');
    core.debug(`Hello ${myInput}`);
    
    core.warning("This is my warning!!!!")

    let sqlpkg = new SqlPackageExe.SqlPackage(myInput, myInput);
    sqlpkg.execute();
    
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
