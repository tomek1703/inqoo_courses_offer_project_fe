import {Component, OnInit} from '@angular/core';
import {Trainer} from "../../shared/Trainer";
import {DatapassingService} from "../../services/datapassing.service";
import {Course} from "../../shared/Course";
import {SubCategory} from "../../shared/SubCategory";
import {isEmpty} from "rxjs";

@Component({
  selector: 'app-trainer-assignment',
  templateUrl: './trainer-assignment.component.html',
  styleUrls: ['./trainer-assignment.component.scss']
})
export class TrainerAssignmentComponent implements OnInit{
  // randomDate(start: Date, end: Date):Date{ return start.getTime() + Math.random() * (end.getTime()-start.getTime())}

  constructor(private passService:DatapassingService) {
  }

  ngOnInit() {
  this.passService.currentCoursesState.subscribe(courses => this.subcats = courses);
  if(this.subcats.length != 0){console.log("API WORKS");}
  else {console.log("We,re screwed!");
  console.log(this.subcats);
  }
  }
  subcats: SubCategory[] = [];
  public trainers: Trainer[] = [
    {
      id: 0,
      name: "Marek",
      timeOff: [new Date(2022,1,1), new Date(2022,12,31), new Date(2022, 11,8), new Date(2022, 2- 3)]
    },
    {
      id: 1,
      name: "Janek",
      timeOff: [new Date(2022-10-11), new Date(2022-7-18), new Date(2022-9-13)]
    },
    {
      id: 2,
      name: "Franek",
      timeOff: [new Date(2022-10-11), new Date(2022-5-3), new Date(2022-10-21)]
    },
  ];

  }

