import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    Company = "Company",
        CompanyNum = "CompanyNum",
        Companies_CompNum = "Companies_CompNum",
        CompanyName = "CompanyName",
        Companies_EngName = "Companies_EngName",
        Button6 = "Button6",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Companies_CompNum(): FormControl {
        return this.fg.controls[MgControlName.Companies_CompNum] as FormControl;
    }

    get Companies_EngName(): FormControl {
        return this.fg.controls[MgControlName.Companies_EngName] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}