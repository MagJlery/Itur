import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./StartProgram.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-StartProgram',
    providers: [...magicProviders],
    styleUrls: ['./StartProgram.component.css'],
    templateUrl: './StartProgram.component.html'
})
export class StartProgram extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc: MgFormControlsAccessor;
    isExpanded: boolean;
    createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }

    ToggleMenu(): void {
        //    console.log('aaa');
            const menu = document.getElementById('Menu');
            const sideNav = document.getElementById('SideNav');
            const main = document.getElementById('Main');
            menu.classList.toggle('change');
           // console.log(menu.classList.length);
            //  this.isExpanded = !this.isExpanded;
            this.isExpanded = menu.classList.length === 3;
            if (this.isExpanded) {
              sideNav.style.width = '13vw';
              main.style.marginLeft = '13vw';
              main.style.transition = '0.5s ease-out';
            } else {
              sideNav.style.width = '0';
              main.style.marginLeft = '0';
            }
          }
        
        OpenMenu(): void
        {
        //  console.log('aaa');
          if (!this.isExpanded) {this.ToggleMenu()} ;
        }
        
        CloseMenu(): void
        {
        //  console.log('aaa');
          if (this.isExpanded) {this.ToggleMenu()} ;
        }
        
}