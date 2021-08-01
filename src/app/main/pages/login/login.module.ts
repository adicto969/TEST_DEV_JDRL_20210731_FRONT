import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/core/modules/shared.module';
import { LoginRoutes } from './login.routing';
import { LoginService } from './login.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutes
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
