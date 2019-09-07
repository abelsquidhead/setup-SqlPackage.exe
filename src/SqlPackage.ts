import * as core from '@actions/core';
import * as exec from '@actions/exec';
    
export class SqlPackage {
    connectionString: string;
    dacpac: string;
    additionalArguments: string;

    constructor() {
        this.connectionString= core.getInput('connectionString');
        this.dacpac = core.getInput('dacpac');
        this.additionalArguments = core.getInput('additionalArguments');
    }

    execute():void {
        // add sql package.exe to path
        core.addPath('C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Enterprise\\Common7\\IDE\\Extensions\\Microsoft\\SQLDB\\DAC\\150');

        // call sql package.exe
        console.log("updating database...");
        console.log("connectionString: " + this.connectionString);
        console.log("dacpac: " + this.dacpac);
        console.log("additionalArguments: " + this.additionalArguments);

        exec.exec("sqlpackage.exe /Action:Publish /SourceFile:\"" + this.dacpac + "\" /TargetConnectionString:\"" + this.connectionString + "\" " + this.additionalArguments);
        console.log("done updating database");
    }
}