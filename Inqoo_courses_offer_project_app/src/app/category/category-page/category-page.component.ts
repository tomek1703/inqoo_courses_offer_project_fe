import {Component, Input, Output} from '@angular/core';
import {RequestService} from "../../services/request.service";
import {CategoryModel} from "./CategoryModel";
import {delay, map} from "rxjs";

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent{
  categories:CategoryModel[] = [];
constructor(private service: RequestService) {}

  ngOnInit(): void{
  this.service.getRecords()
    .subscribe((response: CategoryModel[]) =>{this.categories = response;
    console.log(response)
    });

  }

}
