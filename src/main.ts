import * as core from '@actions/core';
import SqlPackageExe = require("./SqlPackage");

async function run() {
  try {
    let sqlpkg = new SqlPackageExe.SqlPackage();
    sqlpkg.execute();
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
