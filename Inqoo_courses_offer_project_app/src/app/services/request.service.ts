import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CategoryModel} from "../category/category-page/CategoryModel";
import {SubCategory} from "../models/SubCategory";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
private url: string = "http://localhost:8080/category";
  constructor(private httpClient: HttpClient) {}

  getRecords(): Observable<CategoryModel[]>{
    return this.httpClient.get<CategoryModel[]>(this.url);
  }

  getSubs(categoryUUID: string): Observable<SubCategory[]>{
    return this.httpClient.get<SubCategory[]>(this.url + `/subcategory/${categoryUUID}`)
  }

}
