import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    StartProgram = "StartProgram",
        vUser = "vUser",
        vPassword = "vPassword",
        bLogin = "bLogin",
        MainOutlet = "MainOutlet",
}
export enum MgCustomProperties {
    StartProgram_LoggedIn = 'StartProgram~LoggedIn',
        StartProgram_Menu = 'StartProgram~Menu',
}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get vUser(): FormControl {
        return this.fg.controls[MgControlName.vUser] as FormControl;
    }

    get vPassword(): FormControl {
        return this.fg.controls[MgControlName.vPassword] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}