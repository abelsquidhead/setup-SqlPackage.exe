import SqlPackageExe = require("./SqlPackage");
import * as core from '@actions/core';

async function run() {
  try {
    const exec = require ('@actions/exec');
    let sqlpkg = new SqlPackageExe.SqlPackage();
    sqlpkg.execute();
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
