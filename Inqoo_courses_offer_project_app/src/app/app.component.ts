import { Component } from '@angular/core';
import {RoutesConfig} from "./app-routing.module";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Inqoo_courses_offer_project_app';
  routes: { label: string, route: string }[] = [
    {
      label: 'Homepage',
      route: RoutesConfig.homePage
    },
    {
      label: 'Category',
      route: RoutesConfig.category
    }, {
      label: 'Select course',
      route: RoutesConfig.select
    }, {
      label: 'Summary',
      route: RoutesConfig.summary
    },
    ];

}
