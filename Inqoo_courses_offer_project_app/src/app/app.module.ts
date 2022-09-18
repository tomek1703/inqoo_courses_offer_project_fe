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
import {HttpClientModule} from "@angular/common/http";
import { TrainerAssignmentComponent } from './trainer-assignment/trainer-assignment/trainer-assignment.component';
import {TrainerAssignmentModule} from "./trainer-assignment/trainer-assignment.module";

@NgModule({
  declarations: [
    AppComponent,
    KremowkaPageComponent,
    TrainerAssignmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    CategoryModule,
    SummaryModule,
    SelectCourseModule,
    HomePageModule,
    ReactiveFormsModule,
    FormsModule,
    TrainerAssignmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
