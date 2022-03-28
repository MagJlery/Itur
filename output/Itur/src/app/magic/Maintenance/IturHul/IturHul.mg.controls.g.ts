import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    IturHul = "IturHul",
        vSearch = "vSearch",
        btnAdd = "btnAdd",
        Table33554433 = "Table33554433",
        Column33554442 = "Column33554442",
        eitor4hul_Style = "eitor4hul_Style",
        Column33554444 = "Column33554444",
        eitor4hul_Location = "eitor4hul_Location",
        cEdit = "cEdit",
        bEdit = "bEdit",
        cDel = "cDel",
        bDel = "bDel",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column33554442',
        'Column33554444',
        'cEdit',
        'cDel',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get vSearch(): FormControl {
        return this.fg.controls[MgControlName.vSearch] as FormControl;
    }

    get eitor4hul_Style(): FormControl {
        return this.getTableChildFormControl(MgControlName.eitor4hul_Style);
    }

    get eitor4hul_Location(): FormControl {
        return this.getTableChildFormControl(MgControlName.eitor4hul_Location);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}