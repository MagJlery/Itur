import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    Add_Record = "Add_Record",
        Company = "Company",
        V_vCompany = "V_vCompany",
        Style = "Style",
        V_vStyle = "V_vStyle",
        Location = "Location",
        V_vLocation = "V_vLocation",
        btnSave = "btnSave",
        btnCancel = "btnCancel",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_vCompany(): FormControl {
        return this.fg.controls[MgControlName.V_vCompany] as FormControl;
    }

    get V_vStyle(): FormControl {
        return this.fg.controls[MgControlName.V_vStyle] as FormControl;
    }

    get V_vLocation(): FormControl {
        return this.fg.controls[MgControlName.V_vLocation] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}