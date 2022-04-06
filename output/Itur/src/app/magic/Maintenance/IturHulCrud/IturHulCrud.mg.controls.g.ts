import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    IturHulCrud = "IturHulCrud",
        vStyle = "vStyle",
        vLocation = "vLocation",
        bOK = "bOK",
        bCancel = "bCancel",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get vStyle(): FormControl {
        return this.fg.controls[MgControlName.vStyle] as FormControl;
    }

    get vLocation(): FormControl {
        return this.fg.controls[MgControlName.vLocation] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}