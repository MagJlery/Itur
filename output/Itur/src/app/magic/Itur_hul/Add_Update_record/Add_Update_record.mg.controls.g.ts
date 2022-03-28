import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    Add_Update_record = "Add_Update_record",
        Text_Style = "Text_Style",
        edit_hul_style = "edit_hul_style",
        Text_Location = "Text_Location",
        edit_hul_location = "edit_hul_location",
        btnSave = "btnSave",
        btnCancel = "btnCancel",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get edit_hul_style(): FormControl {
        return this.fg.controls[MgControlName.edit_hul_style] as FormControl;
    }

    get edit_hul_location(): FormControl {
        return this.fg.controls[MgControlName.edit_hul_location] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}