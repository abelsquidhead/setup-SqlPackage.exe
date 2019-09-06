
    export class SqlPackage {
        name: string;
    
        constructor(public myInput: string, public myInput2: string) {
            this.name = myInput;
        }
    
        execute():void {
            console.log("oookkkkkk");
        }
    }

