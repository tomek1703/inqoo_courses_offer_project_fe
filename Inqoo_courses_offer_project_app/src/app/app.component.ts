import { Component } from '@angular/core';
import {RoutesConfig} from "./app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Inqoo_courses_offer_project_app';
  routes: { label: string, route: string }[] = [
    {
      label: 'category',
      route: RoutesConfig.category
    }, {
      label: 'select-course',
      route: RoutesConfig.select
    }, {
      label: 'summary',
      route: RoutesConfig.summary
    }];
}
