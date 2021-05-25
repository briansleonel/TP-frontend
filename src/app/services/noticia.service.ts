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
    return this._http.get(this.URL)
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
}
