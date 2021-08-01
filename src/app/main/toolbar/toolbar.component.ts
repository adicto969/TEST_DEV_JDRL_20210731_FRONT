import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public showLoadingBar: boolean;
  public horizontalNav: boolean;
  public username: string;
  public rol: string;
  public activeNotification: boolean;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  public logOut(): void {
    localStorage.clear();
    this.route.navigate(['login']);
  }

}
