import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Passage } from '../models/passage';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {

  private URL: string = 'http://localhost:3000/api/pasaje/';

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

  addPasaje(passage: Passage): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders()
    }
    let body = this.convertJSON(passage);
    return this._http.post(this.URL, body, httpOptions);
  }

  getPassageById(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(),
      params: new HttpParams()
    }

    return this._http.get(this.URL + id, httpOptions);
  }

  updatePassage(passage: Passage): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders()
    }
    let body = this.convertJSON(passage);
    return this._http.put(this.URL + passage._id, body, httpOptions);
  }

  deletePassage(passage: Passage): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders()
    }

    return this._http.delete(this.URL + passage._id, httpOptions);
  }

  private convertJSON(passage: Passage): {} {
    let p = {
      categoriaPasajero : passage.categoriaPasajero,
      fechaCompra : passage.fechaCompra,
      precioPasaje : passage.precioPasaje,
      pasajero : passage.pasajero,
      _id : passage._id
    }
    return p;
  }
}
