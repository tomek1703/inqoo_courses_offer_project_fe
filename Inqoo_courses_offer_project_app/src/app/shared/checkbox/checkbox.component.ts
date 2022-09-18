import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() courseName: String = "Test";
  @Input() selected: boolean = false;
  @Output() selectCourse = new EventEmitter<boolean>();

  onClick() {
    this.selected = !this.selected;
    this.selectCourse.emit(this.selected);
    console.log("Clicked " + this.courseName + " " + this.selected);
  }
}
