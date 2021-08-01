import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseRequest } from 'src/app/core/model/response_request';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;
  public loading = false;

  constructor(
    private formBuild: FormBuilder,
    private rest: LoginService,
    private snakBar: MatSnackBar,
    private router: Router
  ) {
    this.form = this.formBuild.group({
      name: ['', Validators.required],
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

    this.rest.register(this.form.value).subscribe((response: ResponseRequest) => {

      this.showAlert(response.success ? 'Registro exitoso' : response.message);

      if (response.success ) {
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 700);
      }

      this.loading = false;

    }, err => {
      this.loading = false;
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
