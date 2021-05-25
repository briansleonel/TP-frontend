import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Passage } from '../models/passage';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {

  private URL: string = 'http://localhost:3000/api/pasaje';

  constructor(private _http: HttpClient) { }

  getPasajes(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders(),
      params: new HttpParams()
    }

    return this._http.get(this.URL, httpOptions);
  }

  getPasajesFilters(passage: Passage): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(),
      params: {
        categoriaPasajero : passage.categoriaPasajero
      }
    }
    return this._http.get(this.URL, httpOptions);
  }
}
