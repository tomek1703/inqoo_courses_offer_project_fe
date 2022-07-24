import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {RoutesConfig} from "../../app-routing.module";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit, OnDestroy {

  timer: number = 5;

  private timerSubscription: Subscription | undefined;

  setTimer = () => this.timer > 0 ? this.timer -= 1 : this.router.navigate([RoutesConfig.category]);

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.timerSubscription = interval(1000).subscribe(() => this.setTimer())
  }

  ngOnDestroy() {
    this.timerSubscription?.unsubscribe();
  }
}
