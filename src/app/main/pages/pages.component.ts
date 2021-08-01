import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PagesComponent implements OnInit {

  /*@HostBinding('@routerTransitionUp') routeAnimationUp = false;
  @HostBinding('@routerTransitionDown') routeAnimationDown = false;
  @HostBinding('@routerTransitionRight') routeAnimationRight = false;
  @HostBinding('@routerTransitionLeft') routeAnimationLeft = false;
  @HostBinding('@routerTransitionFade') routeAnimationFade = false;*/

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    /*this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activateRoute)
    ).subscribe(() => {
      this.routeAnimationFade = !this.routeAnimationFade;
    });*/
  }

  ngOnInit() {
  }

}
