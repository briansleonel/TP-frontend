import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
