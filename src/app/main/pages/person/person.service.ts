import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  public getPerson(page: number, count: number): Observable<any> {
    return this.http.get(`${environment.api}person`);
  }

  public addPerson(form: any): Observable<any> {
    return this.http.post(`${environment.api}person`, form);
  }

  public updatePerson(form: any, id: number): Observable<any> {
    return this.http.put(`${environment.api}person/${id}`, form);
  }

  public activeInactive(id: number): Observable<any> {
    return this.http.put(`${environment.api}person/${id}/Active-Inactive`, {});
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${environment.api}person/${id}`);
  }
}
