import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersNew = new HttpHeaders();
    let authorizedRequest = req.clone();

    if (!this.auth.isAuthenticated()) {
      if (this.router.url !== '/') {
        this.router.navigate(['/login']);
      }
    }

    const token = localStorage.getItem('token');

    authorizedRequest = req.clone({
      headers: headersNew.append('Authorization', `Bearer ${ token != null ? token : '' }`),
    });

    return next.handle(authorizedRequest);

  }

}
