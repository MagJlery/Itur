import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./IturHulCrud.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-IturHulCrud',
    providers: [...magicProviders],
    templateUrl: './IturHulCrud.component.html'
})
export class IturHulCrud extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc: MgFormControlsAccessor;
    createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "IturHulCrud";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "300px";
    private static readonly height: string = "300px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = true;
    X() {
        return IturHulCrud.x;
    }
    Y() {
        return IturHulCrud.y;
    }
    Width(): string {
        return IturHulCrud.width;
    }
    Height(): string {
        return IturHulCrud.height;
    }
    IsCenteredToWindow() {
        return IturHulCrud.isCenteredToWindow;
    }
    FormName() {
        return IturHulCrud.formName;
    }
    ShowTitleBar() {
        return IturHulCrud.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return IturHulCrud.shouldCloseOnBackgroundClick;
    }
}