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
    title: "Java",
    courses: ["Basics"]
  },
  {
    id: 1,
    title: "C#",
    courses: ["Basics"]
  },
  {
    id: 2,
    title: "JS",
    courses: ["Basics", "Angular","React", "Redux"]
  },
  {
    id: 3,
    title: "DevOps",
    courses: ["Basics"]
  }

]
}
