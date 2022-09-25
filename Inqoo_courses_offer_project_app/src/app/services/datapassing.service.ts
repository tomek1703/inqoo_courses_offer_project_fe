import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {SubCategory} from "../models/SubCategory";

@Injectable({
  providedIn: 'root'
})
export class DatapassingService {
private coursesState = new BehaviorSubject(Array<SubCategory>());
private uuid = new BehaviorSubject(String());
currentUUIDState = this.uuid.asObservable();
currentCoursesState = this.coursesState.asObservable();

updateCoursesState(courses: Array<SubCategory>){
  this.coursesState.next(courses);
}

updateUUIDState(uuid: string){
  this.uuid.next(uuid);
}
}
