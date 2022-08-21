import { Component } from '@angular/core';
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
  background: "../../../assets/card1.jpg"
},
  {
    id: 1,
    title: "Sales",
    description: "sales desc",
    background: "../../../assets/card2.png"
  },
  {
    id: 2,
    title: "Marketing",
    description: "marketing desc",
    background: "../../../assets/card3.jpg"
  },
  {
    id: 3,
    title: "Other",
    description: "other desc",
    background: "../../../assets/card4.jpg"
  }];
}
