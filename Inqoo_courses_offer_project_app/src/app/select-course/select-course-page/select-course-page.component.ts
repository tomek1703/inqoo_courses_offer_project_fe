import { Component } from '@angular/core';
import {SubCategory} from "../../shared/SubCategory";

@Component({
  selector: 'app-select-course-page',
  templateUrl: './select-course-page.component.html',
  styleUrls: ['./select-course-page.component.scss']
})
export class SelectCoursePageComponent{
public subCategories: SubCategory[] = [
  {
    id: 0,
    title: "Java"
  },
  {
    id: 1,
    title: "JS"
  },
  {
    id: 2,
    title: "CSS"
  },
  {
    id: 3,
    title: "HTML"
  }

]
}
