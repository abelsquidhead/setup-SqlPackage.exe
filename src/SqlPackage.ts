import * as core from '@actions/core';
import * as exec from '@actions/exec';
    
export class SqlPackage {
    name: string;

    constructor() {
        const myInput = core.getInput('myInput');
        this.name = myInput;
    }

    execute():void {
        // add sql package.exe to path
        console.log("oookkkkkk " + this.name);
        core.addPath('C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Enterprise\\Common7\\IDE\\Extensions\\Microsoft\\SQLDB\\DAC\\150');

        // call sql package.exe
        exec.exec("sqlpackage.exe")
    }
}

