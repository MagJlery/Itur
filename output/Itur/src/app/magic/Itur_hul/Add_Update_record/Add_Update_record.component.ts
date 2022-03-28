import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./Add_Update_record.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-Add_Update_record',
    providers: [...magicProviders],
    templateUrl: './Add_Update_record.component.html'
})
export class Add_Update_record extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc: MgFormControlsAccessor;
    createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "Add_Update_record";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "300px";
    private static readonly height: string = "300px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = true;
    X() {
        return Add_Update_record.x;
    }
    Y() {
        return Add_Update_record.y;
    }
    Width(): string {
        return Add_Update_record.width;
    }
    Height(): string {
        return Add_Update_record.height;
    }
    IsCenteredToWindow() {
        return Add_Update_record.isCenteredToWindow;
    }
    FormName() {
        return Add_Update_record.formName;
    }
    ShowTitleBar() {
        return Add_Update_record.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return Add_Update_record.shouldCloseOnBackgroundClick;
    }
}