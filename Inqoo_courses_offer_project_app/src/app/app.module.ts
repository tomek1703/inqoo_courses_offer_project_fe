import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from "./shared/shared.module";
import {CategoryModule} from "./category/category.module";
import {SummaryModule} from "./summary/summary.module";
import {SelectCourseModule} from "./select-course/select-course.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    CategoryModule,
    SummaryModule,
    SelectCourseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
