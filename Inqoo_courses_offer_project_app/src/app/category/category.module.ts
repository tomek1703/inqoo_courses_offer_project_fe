import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent } from './category-page/category-page.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    CategoryPageComponent
  ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class CategoryModule { }
