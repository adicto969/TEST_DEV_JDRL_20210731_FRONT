import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  public getRport(page: number, count: number): Observable<any> {
    return this.http.get(`${environment.api}report?page=${page}&count=${count}`);
  }
}
