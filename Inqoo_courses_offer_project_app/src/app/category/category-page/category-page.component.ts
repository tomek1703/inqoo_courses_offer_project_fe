import {Component, Input, Output} from '@angular/core';
import {MockCategories} from "../../shared/MockCategories";

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent{
  public items: MockCategories[] = [{
  id: 0,
  title: "IT",
  description: "IT Desc",
  background: "url('../../assets/card1.jpg')"
},
  {
    id: 1,
    title: "Sales",
    description: "sales desc",
    background: "url('../../assets/card2.jpg')"
  },
  {
    id: 2,
    title: "Marketing",
    description: "marketing desc",
    background: "url('../../assets/card3.jpg')"
  },
  {
    id: 3,
    title: "Other",
    description: "other desc",
    background: "url('../../assets/card4.png')"
  }];

}
