import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormComponent } from './form/form.component';
import {RouterModule} from "@angular/router";
import {NgbModule, NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {FooterComponent} from "./footer/footer.component";
import {BannerComponent} from "./banner/banner.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DatepickerComponent } from './datepicker/datepicker.component';



@NgModule({
  declarations: [
    NavBarComponent,
    CardComponent,
    ButtonComponent,
    CheckboxComponent,
    FormComponent,
    BannerComponent,
    FooterComponent,
    DatepickerComponent
  ],

  exports: [
    NavBarComponent,
    CardComponent,
    ButtonComponent,
    CheckboxComponent,
    FormComponent,
    FooterComponent,
    BannerComponent,
    DatepickerComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    NgbTooltipModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ]
})
export class SharedModule { }
