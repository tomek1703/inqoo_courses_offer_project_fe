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
      label: 'Strona główna',
      route: RoutesConfig.homePage
    },
    {
      label: 'Kategorie',
      route: RoutesConfig.category
    }, {
      label: 'Wybierz kurs',
      route: RoutesConfig.select
    }, {
      label: 'Podsumowanie',
      route: RoutesConfig.summary
    },
    ];

}
