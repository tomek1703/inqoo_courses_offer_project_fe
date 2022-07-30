import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectCoursePageComponent } from './select-course-page/select-course-page.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    SelectCoursePageComponent
  ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class SelectCourseModule { }
