import {Component,Input} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  public isCollapsed = true;
  @Input() routes: { label: string, route: string }[] = [];
  constructor(){
  }
}
