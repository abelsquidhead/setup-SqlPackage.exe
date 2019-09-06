
import * as core from '@actions/core';

    
export class SqlPackage {
    name: string;
    exec;

    constructor() {
        this.exec = require('@actions/exec');
        const myInput = core.getInput('myInput');
        this.name = myInput;
    }

    execute():void {
        console.log("oookkkkkk " + this.name);
        core.addPath('C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Enterprise\\Common7\\IDE\\Extensions\\Microsoft\\SQLDB\\DAC\\150');

        this.exec.exec("sqlpackage.exe")
    }
}

