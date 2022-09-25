import {Component, Input, OnInit} from '@angular/core';
import {SubCategory} from "../../models/SubCategory";
import {DatapassingService} from "../../services/datapassing.service";
import {Course} from "../../models/Course";
import {RequestService} from "../../services/request.service";

@Component({
  selector: 'app-select-course-page',
  templateUrl: './select-course-page.component.html',
  styleUrls: ['./select-course-page.component.scss']
})
export class SelectCoursePageComponent implements OnInit {
  constructor(private passService: DatapassingService, private requestService: RequestService) {
  }

  ngOnInit() {
    this.passService.currentCoursesState.subscribe(courses => this.coursesToPass = courses);
    this.passService.currentUUIDState.subscribe(uuid => this.uuid = uuid);
    this.requestService.getSubs(this.uuid).subscribe(courses => this.subCategories = courses);
  }

  uuid:string ="";
  coursesToPass: SubCategory[]=[];
  submit() {
    console.log(this.subCategories);
    const selectedCourses = this.subCategories;
    this.passService.updateCoursesState(selectedCourses);
    console.log("Przeszły" + selectedCourses);
  }

  public subCategories: SubCategory[] = [
    {
      id: 0,
      title: "Java",
      courses: [{
        uuid: "jnkjnk",
        name: "Basics",
        time: 30,
        price: 3000,
        selected:false
      }]
    },
    {
      id: 1,
      title: "C#",
      courses: [{
        uuid: "sada",
        name: "Basics",
        time: 38,
        price: 3200,
        selected:false
      }]
    },
    {
      id: 2,
      title: "JS",
      courses: [{
        uuid: "tyfy",
        name: "Basics",
        time: 30,
        price: 3000,
        selected:false
      },
        {
          uuid: "gyugu",
          name: "Advanced",
          time: 30,
          price: 3000,
          selected:false
        },
        {
          uuid: "jn23edk",
          name: "React",
          time: 40,
          price: 5000,
          selected: false
        }]
    },
    {
      id: 3,
      title: "DevOps",
      courses: [{
        uuid:"hgfytf",
        name:"Basics",
        time:30,
        price:3500,
        selected:false
      }]
    }

  ]




}
