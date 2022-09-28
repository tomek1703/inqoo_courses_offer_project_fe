import {Component, Input, Output} from '@angular/core';
import {RequestService} from "../../services/request.service";
import {CategoryModel} from "./CategoryModel";
import {delay, map} from "rxjs";
import {DatapassingService} from "../../services/datapassing.service";

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent{
  categories:CategoryModel[] = [];
constructor(private service: RequestService, private passService: DatapassingService) {}

  ngOnInit(): void{
  this.service.getRecords()
    .subscribe((response: CategoryModel[]) =>{this.categories = response;
    console.log(response)
    });
  this.passService.currentUUIDState.subscribe(response => this.uuid = response);
  }
private uuid:string="";

sendUUID(uuidToSend: string){
  this.passService.updateUUIDState(uuidToSend);
}
}
