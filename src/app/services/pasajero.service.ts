import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PasajeroService {

  URL: string = 'http://localhost:3000/api/persona'

  constructor(private _http: HttpClient) { }

  getAll(): Observable<any> {
    const httpOptions = {
      headers : new HttpHeaders(),
      params : new HttpParams()
    }

    return this._http.get(this.URL, httpOptions);
  }

  addPasajero(person: Person): Observable<any> {
    const httpOptions = {
      headers : new HttpHeaders()
    }
    let body = this.convertJSON(person);
    return this._http.post(this.URL, body, httpOptions);
  }

  private convertJSON(person: Person): {} {
    let p = {
      nro_documento : person.nro_documento,
      apellido : person.apellido,
      nombre : person.nombre,
      email : person.email
    }
    return p;
  }
}
