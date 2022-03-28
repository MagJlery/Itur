import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    LoginUser = "LoginUser",
        UserName = "UserName",
        V_vUserName = "V_vUserName",
        Password = "Password",
        V_vPassword = "V_vPassword",
        LogIn = "LogIn",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_vUserName(): FormControl {
        return this.fg.controls[MgControlName.V_vUserName] as FormControl;
    }

    get V_vPassword(): FormControl {
        return this.fg.controls[MgControlName.V_vPassword] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}