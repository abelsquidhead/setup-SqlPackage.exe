"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const exec = __importStar(require("@actions/exec"));
class SqlPackage {
    constructor() {
        const myInput = core.getInput('myInput');
        this.name = myInput;
    }
    execute() {
        // add sql package.exe to path
        console.log("oookkkkkk " + this.name);
        core.addPath('C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Enterprise\\Common7\\IDE\\Extensions\\Microsoft\\SQLDB\\DAC\\150');
        // call sql package.exe
        exec.exec("sqlpackage.exe");
    }
}
exports.SqlPackage = SqlPackage;
