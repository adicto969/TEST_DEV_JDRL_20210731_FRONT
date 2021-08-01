import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../core/modules/shared.module';
import { PagesComponent } from './pages/pages.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AuthService } from '../core/services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    MainComponent,
    PagesComponent,
    ToolbarComponent
  ],
  exports: [
    MainComponent
  ],
  providers: [
    AuthService
  ]
})
export class MainModule { }
