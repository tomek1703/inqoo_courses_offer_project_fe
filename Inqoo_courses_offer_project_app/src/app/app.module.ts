import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavBarModule} from "../nav-bar/nav-bar.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllCoursesPageComponent } from './pages/all-courses-page/all-courses-page.component';
import { ITComponent } from './pages/all-courses-page/it/it.component';
import { SalesComponent } from './pages/all-courses-page/sales/sales.component';
import { MarketingCourseComponent } from './pages/all-courses-page/marketing-course/marketing-course.component';
import { SalesPageComponent } from './pages/all-courses-page/sales-page/sales-page.component';
import { ItCoursesComponent } from './pages/all-courses-page/it-courses/it-courses.component';
import { OtherCoursesComponent } from './pages/all-courses-page/other-courses/other-courses.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';
import { CoursesSelectionPageComponent } from './pages/courses-selection-page/courses-selection-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AllCoursesPageComponent,
    ITComponent,
    SalesComponent,
    MarketingCourseComponent,
    SalesPageComponent,
    ItCoursesComponent,
    OtherCoursesComponent,
    SummaryPageComponent,
    CoursesSelectionPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
