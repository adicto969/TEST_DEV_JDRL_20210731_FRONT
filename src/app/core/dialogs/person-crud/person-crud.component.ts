import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { PersonService } from 'src/app/main/pages/person/person.service';
import * as moment from 'moment';

@Component({
  selector: 'app-person-crud',
  templateUrl: './person-crud.component.html',
  styleUrls: ['./person-crud.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonCrudComponent implements OnInit {

  public form: FormGroup;
  public loading = false;

  constructor(
    public dialogRef: MatDialogRef<PersonCrudComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private rest: PersonService
  ) {
    this.form = this.formBuilder.group({
      Nombre: [data.nombre],
      ApellidoPaterno: [data.apellidoPaterno],
      ApellidoMaterno: [data.apellidoMaterno],
      RFC: [data.rfc, [Validators.minLength(13), Validators.maxLength(13)]],
      FechaNacimiento: [data.fechaNacimiento]
    });

    if (!!!data.idPersonaFisica) {
      this.form.get('Nombre').setValidators([Validators.required]);
      this.form.get('ApellidoPaterno').setValidators([Validators.required]);
      this.form.get('ApellidoMaterno').setValidators([Validators.required]);
      this.form.get('RFC').setValidators([Validators.required, Validators.minLength(13), Validators.maxLength(13)]);
      this.form.get('FechaNacimiento').setValidators([Validators.required]);
    }
  }

  ngOnInit() {
  }

  public submit() {
    if (this.data.idPersonaFisica > 0) {
      this.rest.updatePerson(this.form.value, this.data.idPersonaFisica).subscribe((response) => {
        if (response.idPersonaFisica > 0) {
          this.showAlert('Persona Actualizada');
          this.dialogRef.close(true);
        } else {
          this.showAlert('Verifique sus datos');
        }
      }, err => {
        this.showAlert('Error Al Actualizada');
      });
    } else {
      this.rest.addPerson(this.form.value).subscribe((response) => {
        this.dialogRef.close(true);
      });
    }
  }

  public isValid(property: string): boolean {
    return this.form.get(property).valid;
  }

  private showAlert(message: string): void {
    this.snackBar.open(message, '', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 3000
    });
  }

}
