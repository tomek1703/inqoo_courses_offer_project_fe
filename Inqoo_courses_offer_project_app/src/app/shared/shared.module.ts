import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormComponent } from './form/form.component';
import {RouterModule} from "@angular/router";
import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    NavBarComponent,
    CardComponent,
    ButtonComponent,
    CheckboxComponent,
    FormComponent,
    BannerComponent,
    FooterComponent,
  ],

  exports: [
    NavBarComponent,
    CardComponent,
    ButtonComponent,
    CheckboxComponent,
    FormComponent,
    FooterComponent
  ],
    exports: [
        NavBarComponent,
        CardComponent,
        ButtonComponent,
        CheckboxComponent,
        FormComponent,
        BannerComponent
    ],

    imports: [
        CommonModule,
        RouterModule,
        NgbTooltipModule
    ]
})
export class SharedModule { }
