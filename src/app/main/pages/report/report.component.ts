import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ReportService } from './report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReportComponent implements OnInit {

  public headers: Array<string> =
    ['id', 'name', 'paterno', 'materno', 'dateregister', 'razonsocial', 'rfc', 'sucursal', 'idempleado', 'idviaje'];

  public dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  public loading = true;
  public page = 1;
  public perPage = 20;
  public totalRecord = 0;

  constructor(private rest: ReportService) {
    this.getReport();
  }

  ngOnInit() {
  }

  public getReport(): void {
    this.loading = true;

    this.rest.getRport(this.page, this.perPage).subscribe(result => {
      this.dataSource.data = result.data;
      this.totalRecord = result.totalRecord;
      this.loading = false;
    }, err => {
      this.loading = false;
    });
  }

  public changeTable(event: any): void {
    this.page = event.pageIndex + 1;
    this.perPage = event.pageSize;

    this.getReport();
  }

}
