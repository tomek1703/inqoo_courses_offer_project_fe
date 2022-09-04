import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page/home-page.component';
import {SharedModule} from "../shared/shared.module";
import {RouterLink} from "@angular/router";
import {AppRoutingModule, RoutesConfig} from "../app-routing.module";


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink,
    AppRoutingModule,
  ]
})
export class HomePageModule {
}

