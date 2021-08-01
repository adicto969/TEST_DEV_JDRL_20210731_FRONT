import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseLogin } from 'src/app/core/model/response_login';
import { ResponseRequest } from 'src/app/core/model/response_request';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public submit(form: any): Observable<any> {
    return this.http.post(`${environment.api}user/login`, form).pipe(
      map((response: any) => {
        const resp = new ResponseLogin();

        if (!!!response.token) {
          resp.message = !!response.message ? response.message : 'Error server';
          resp.success = false;

          return resp;
        }

        localStorage.setItem('token', response.token);

        resp.message = 'Logeado';
        resp.success = true;

        return resp;
      })
    );
  }

  public register(form: any): Observable<any> {
    return this.http.post(`${environment.api}user`, form).pipe(
      map((response: any) => {
        const resp = new ResponseRequest();
        resp.data = null;
        resp.message = 'Ocurrio un error intentelo mas tardes';
        resp.success =  false;

        if (!!response.idUser) {
          resp.success = true;
          resp.message = 'Registro exitoso';
          resp.data = response;
        } else {
          resp.success = response.success;
          resp.message = response.message;
          resp.data = response.data;
        }

        return resp;
      })
    );
  }
}
