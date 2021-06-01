import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private URL: string = "http://localhost:3000/api/noticias/"

  constructor(private _http: HttpClient) { }

  getNoticias(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(),
      params: new HttpParams()
    }
    return this._http.get(this.URL, httpOptions)
  }

  add(noticia: Noticia): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(),
      params: new HttpParams()
    }
    var body = {
      titulo : noticia.titulo,
      noticia : noticia.noticia,
      img : noticia.img,
      vigente : noticia.vigente
    };
    //console.log("Body en el post: ",body)
    return this._http.post(this.URL, body, httpOptions)
  }

  delete(noticia: Noticia): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders()
    }
    return this._http.delete(this.URL + noticia._id, httpOptions)
  }

  update(noticia: Noticia): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders()
    }
    let body = this.convertJSON(noticia);
    return this._http.put(this.URL + noticia._id, body, httpOptions);
  }

  getNoticiasFilter(noticia: Noticia): Observable<any> {
    const httpOptions = {
      headers : new HttpHeaders(),
      params : {
        vigente : String(noticia.vigente)
      }
    }
    return this._http.get(this.URL , httpOptions);
  }

  convertJSON(noticia: Noticia): {} {
    let n = {
      _id : noticia._id,
      titulo : noticia.titulo,
      noticia : noticia.noticia,
      img : noticia.img,
      vigente : noticia.vigente
    }
    return n;
  }
}
