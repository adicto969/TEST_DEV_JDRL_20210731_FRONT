import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/services/auth-guard.service';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./main/pages/login/login.module').then(module => module.LoginModule)
  },
  {
    path: 'person',
    loadChildren: () => import('./main/pages/person/person.module').then(module => module.PersonModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'report',
    loadChildren: () => import('./main/pages/report/report.module').then(module => module.ReportModule),
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: 'person'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
