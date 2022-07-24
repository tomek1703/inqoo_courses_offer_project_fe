import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    NavBarComponent,
    CardComponent,
    ButtonComponent,
    CheckboxComponent,
    TooltipComponent,
    FormComponent,
  ],
    exports: [
        NavBarComponent,
        CheckboxComponent
    ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
