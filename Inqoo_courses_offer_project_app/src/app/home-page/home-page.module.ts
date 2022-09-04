import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page/home-page.component';
import {SharedModule} from "../shared/shared.module";
import {AppRoutingModule} from "../app-routing.module";


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ]
})
export class HomePageModule {
}

