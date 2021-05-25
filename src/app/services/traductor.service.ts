import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Translate } from '../models/translate';

@Injectable({
  providedIn: 'root'
})
export class TraductorService {

  constructor(private _http: HttpClient) { }

  translate(translate: Translate): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-key": "cc8748fa2cmsh836a565b0d7ead4p1b340cjsn2ce8ce189ee7",
		    "x-rapidapi-host": "systran-systran-platform-for-language-processing-v1.p.rapidapi.com"
      }),
      params : {
        source : translate.source,
        target : translate.target,
        input : translate.input
      }
    }
    return this._http.get("https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate", httpOptions);
  }
}
