import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { SharedModule } from 'src/app/core/modules/shared.module';
import { ReportRoutes } from './report.routing';
import { ReportService } from './report.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReportRoutes
  ],
  declarations: [ReportComponent],
  providers: [
    ReportService
  ]
})
export class ReportModule { }
