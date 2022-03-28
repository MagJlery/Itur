import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./Itur_hul.mg.controls.g";
import { MgDisplayedColumns } from "./Itur_hul.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-Itur_hul',
    providers: [...matMagicProviders],
    templateUrl: './Itur_hul.component.html'
})
export class Itur_hul extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    displayedColumns = this.mgdp;
}