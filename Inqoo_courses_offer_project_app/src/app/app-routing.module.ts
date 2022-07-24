import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryPageComponent} from "./category/category-page/category-page.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found/page-not-found.component";
import {SelectCoursePageComponent} from "./select-course/select-course-page/select-course-page.component";
import {SummaryComponent} from "./summary/summary/summary.component";

export const enum RoutesConfig {
  category  = 'category-page',
  select = 'select-course',
  summary = 'summary',
  inqooDeck = 'inqoo-deck'
}

const routes: Routes = [
  {path: RoutesConfig.category, component: CategoryPageComponent},
  {path: RoutesConfig.select, component: SelectCoursePageComponent},
  {path: RoutesConfig.summary, component: SummaryComponent},
  {path: '', redirectTo: '/category-page', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
