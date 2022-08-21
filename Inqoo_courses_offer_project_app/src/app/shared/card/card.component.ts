import {Component, Input, ViewChild, AfterViewInit} from '@angular/core';
import {CategoryPageComponent} from "../../category/category-page/category-page.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{
  @Input() title: String = "Test";
  @Input() description: String = "Test description";
  @Input() background: String = "url('../../assets/card1.jpg')";
}
