import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from "./shared/shared.module";
import {CategoryModule} from "./category/category.module";
import {SummaryModule} from "./summary/summary.module";
import {SelectCourseModule} from "./select-course/select-course.module";
import {HomePageModule} from "./home-page/home-page.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { KremowkaPageComponent } from './kremowka-page/kremowka-page.component';

@NgModule({
  declarations: [
    AppComponent,
    KremowkaPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    CategoryModule,
    SummaryModule,
    SelectCourseModule,
    HomePageModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
