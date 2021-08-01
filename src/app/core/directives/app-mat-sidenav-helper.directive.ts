import { Input } from '@angular/core';
import { Directive, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Subscription } from 'rxjs';
import { MatSidenavHelperService } from '../services/mat-sidenav-helper.service';
import { MatchMediaService } from '../services/match-media.service';

@Directive({
  selector: '[appMatSidenavHelper]'
})
export class AppMatSidenavHelperDirective implements OnInit, OnDestroy {

  matchMediaSubscription: Subscription;
  validMode: string[] = ['over', 'push', 'side'];
  validPosition: string[] = ['start', 'end'];

  @HostBinding('class.mat-is-locked-open') isLockedOpen = true;

  @Input('appMatSidenavHelper') id: string;
  // tslint:disable-next-line:no-input-rename
  @Input('appMatSidenavMode') mode: 'over' | 'push' | 'side';
  // tslint:disable-next-line:no-input-rename
  @Input('appMatSidenavPosition') position: 'start' | 'end';
  // tslint:disable-next-line:no-input-rename
  @Input('mat-is-locked-open') matIsLockedOpenBreakpoint: string;

  constructor(
    private appMatSidenavService: MatSidenavHelperService,
    private appMatchMedia: MatchMediaService,
    private matSidenav: MatSidenav
  ) { }

  ngOnInit() {
    if (!!!this.validMode.find(mode => mode === this.mode)) {
        this.mode = 'over';
    }

    if (!!!this.validPosition.find(position => position === this.position)) {
        this.position = 'end';
    }

    this.appMatSidenavService.setSidenav(this.id, this.matSidenav);

    this.isLockedOpen = false;
    this.matSidenav.mode = this.mode; // mode 'over' | 'push' | 'side'
    this.matSidenav.position = this.position; // 'start' | 'end'
    this.matSidenav.toggle(false); // show nav

    this.matchMediaSubscription = this.appMatchMedia.onMediaChange.subscribe(() => {

        this.isLockedOpen = false;
        this.matSidenav.mode = this.mode; // 'over' | 'push' | 'side'
        this.matSidenav.position = this.position; // 'start' | 'end'
        this.matSidenav.toggle(false); // show nav
    });
  }

  ngOnDestroy() {
    this.matchMediaSubscription.unsubscribe();
  }

}
