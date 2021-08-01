import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public jwtHelper: JwtHelperService;
  public valid = false;

  constructor() {
    this.jwtHelper = new JwtHelperService();
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!!!token) {
      return false;
    }
    return !this.jwtHelper.isTokenExpired(token);
  }

  public get id(): number {
    const token = localStorage.getItem('token');
    const user = this.jwtHelper.decodeToken(token);
    if (!!user) {
      return user.UserId;
    }

    return 0;
  }

}
