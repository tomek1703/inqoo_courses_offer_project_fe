import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Course} from "../shared/Course";
import {SubCategory} from "../shared/SubCategory";

@Injectable({
  providedIn: 'root'
})
export class DatapassingService {
private coursesState = new BehaviorSubject(new Array);
currentCoursesState = this.coursesState.asObservable();

updateCoursesState(courses: Array<SubCategory>){
  this.coursesState.next(courses);
}
}
