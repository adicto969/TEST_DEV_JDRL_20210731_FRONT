import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person.component';

const routes: Routes = [
  {
    path: '',
    component: PersonComponent
  },
];

export const PersonRoutes = RouterModule.forChild(routes);
