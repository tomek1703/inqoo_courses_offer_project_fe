import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{
  @Input() title: String = "Test";
  @Input() description: String = "Test description";

  bgImageVariable = 'url("../../../assets/card2.png")';
}
