import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormComponent } from './form/form.component';
import {RouterModule} from "@angular/router";
import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {FooterComponent} from "./footer/footer.component";
import {BannerComponent} from "./banner/banner.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    NavBarComponent,
    CardComponent,
    ButtonComponent,
    CheckboxComponent,
    FormComponent,
    BannerComponent,
    FooterComponent
  ],

  exports: [
    NavBarComponent,
    CardComponent,
    ButtonComponent,
    CheckboxComponent,
    FormComponent,
    FooterComponent,
    BannerComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    NgbTooltipModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
