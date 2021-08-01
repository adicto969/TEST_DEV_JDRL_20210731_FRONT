import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';
import { PersonCrudComponent } from 'src/app/core/dialogs/person-crud/person-crud.component';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonComponent implements OnInit {

  public headers: Array<string> = ['id', 'name', 'paternal', 'maternal', 'rfc', 'birthday', 'active', 'created', 'updated', 'actions'];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  public page = 1;
  public perPage = 20;
  public loading = true;

  constructor(private rest: PersonService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getPerson();
  }

  public getPerson(): void {
    this.loading = true;

    this.rest.getPerson(this.page, this.perPage).subscribe((response) => {
      this.dataSource.data = response;
      this.loading = false;
    }, err => {
      this.showAlert('Ocurrio un error');
      this.loading = false;
    });
  }

  public add(): void {
    const dialogRef = this.dialog.open(PersonCrudComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(resp => {
      if (resp) {
        this.getPerson();
      }
    });
  }

  public edit(person: any): void {
    const dialogRef = this.dialog.open(PersonCrudComponent, {
      data: person
    });

    dialogRef.afterClosed().subscribe(resp => {
      if (resp) {
        this.getPerson();
      }
    });
  }

  public activeInactive(person: any): void {
    this.rest.activeInactive(person.idPersonaFisica).subscribe(response => {
      this.getPerson();
    }, err => {
      this.showAlert('Ocurrio un error');
    });
  }

  public delete(person: any): void {
    this.rest.delete(person.idPersonaFisica).subscribe(response => {
      this.getPerson();
    }, err => {
      this.showAlert('Ocurrio un error');
    });
  }

  private showAlert(message: string): void {
    this.snackBar.open(message, '', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 3000
    });
  }

}
