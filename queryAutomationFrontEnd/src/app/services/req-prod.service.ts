import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {Requetes} from "../model/requetes.model";
@Injectable({
  providedIn: 'root'
})
export class ReqProdService {
  private apiUrl = 'http://localhost:8080/api/requetesrisque';

  constructor(private http: HttpClient) {}

  createRequete(requetes: Requetes): Observable<Requetes> {
    return this.http.post<Requetes>(this.apiUrl, requetes);
  }

}
