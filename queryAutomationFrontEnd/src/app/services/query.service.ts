import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  private apiUrl = 'http://localhost:8080/api/generate-query';

  constructor(private http: HttpClient) { }

  generateQuery(naturalLanguageQuery: string): Observable<any> {
    return this.http.post(this.apiUrl, { query: naturalLanguageQuery });
  }
}
