import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import { SharedModule } from 'src/app/core/modules/shared.module';
import { PersonRoutes } from './person.routing';
import { PersonService } from './person.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PersonRoutes
  ],
  declarations: [PersonComponent],
  providers: [
    PersonService
  ]
})
export class PersonModule { }
