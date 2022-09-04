import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryPageComponent} from "./category/category-page/category-page.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found/page-not-found.component";
import {SelectCoursePageComponent} from "./select-course/select-course-page/select-course-page.component";
import {SummaryComponent} from "./summary/summary/summary.component";
import {HomePageComponent} from "./home-page/home-page/home-page.component";
import {KremowkaPageComponent} from "./kremowka-page/kremowka-page.component";

export const enum RoutesConfig {
  category  = 'category-page',
  select = 'select-course',
  summary = 'summary',
  kremowka ='kremowka-page',
  homePage= 'home-page'
}

const routes: Routes = [
  {path: RoutesConfig.homePage, component: HomePageComponent},
  {path: RoutesConfig.category, component: CategoryPageComponent},
  {path: RoutesConfig.select, component: SelectCoursePageComponent},
  {path: RoutesConfig.kremowka, component: KremowkaPageComponent},
  {path: RoutesConfig.summary, component: SummaryComponent},

  {path: '', redirectTo: RoutesConfig.homePage, pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
