import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  public get isLogged(): boolean {
    return this.auth.isAuthenticated();
  }

}
