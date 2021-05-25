import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Translate } from '../models/translate';

@Injectable({
  providedIn: 'root'
})
export class TraductorLogsService {

  private URL: string = "http://localhost:3000/api/logs-traductor"

  constructor(private _http: HttpClient) { }

  addLogs(translate: Translate): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(),
      params: new HttpParams()
    }
    var body = {
      textoOrigen: translate.input,
      idiomaOrigen: translate.source,
      textoDestino: translate.result,
      idiomaDestino: translate.target
    }
    return this._http.post(this.URL, body, httpOptions)
  }
  
  getLogs(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders(),
      params: new HttpParams()
    }
    return this._http.get(this.URL, httpOptions)
  }

  getLogsFilter(translate: Translate): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(),
      params: {
        idiomaOrigen: translate.source,
        idiomaDestino : translate.target
      }
    }

    let url = this.URL;

    console.log(url)
    return this._http.get(this.URL, httpOptions)
  }
  
}
