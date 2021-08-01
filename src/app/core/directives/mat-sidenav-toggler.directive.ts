import { Directive, HostListener, Input } from '@angular/core';
import { MatSidenavHelperService } from '../services/mat-sidenav-helper.service';

@Directive({
  selector: '[appMatSidenavToggler]'
})
export class MatSidenavTogglerDirective {

  @Input('appMatSidenavToggler') id;

  constructor(private appMatSidenavService: MatSidenavHelperService) { }

  @HostListener('click')
  onClick() {
      this.appMatSidenavService.getSidenav(this.id).toggle();
  }
}
