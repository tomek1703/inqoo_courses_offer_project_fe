import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent{
  constructor(private calendar: NgbCalendar) {
  }

  // @ts-ignore
  model: NgbDateStruct;
  // @ts-ignore
  date: {year: number, month: number};

  selectToday() {
    this.model = this.calendar.getToday();
  }

}
