import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ResponseLogin } from 'src/app/core/model/response_login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public loading = false;

  constructor(
    private formBuild: FormBuilder,
    private rest: LoginService,
    private snakBar: MatSnackBar,
    private route: Router
  ) {
    this.form = this.formBuild.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  public isValid(property: string): boolean {
    return this.form.get(property).invalid;
  }

  public submit() {
    this.loading = true;

    this.rest.submit(this.form.value).subscribe((response: ResponseLogin) => {
      if (response.success) {
        this.showAlert('Se a logueado correctamente');
        this.route.navigate(['person']);
      } else {
        this.showAlert(response.message);
      }

      this.loading = false;
    }, err => {
      this.loading = false;
      console.log(err);
      this.showAlert('Verifique sus datos');
    });
  }

  private showAlert(message: string): void {
    this.snakBar.open(message, '', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 3000
    });
  }

}
