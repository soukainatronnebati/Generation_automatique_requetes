import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {RequeteRisqueComponent} from "../components/requete-risque/requete-risque.component";

@Injectable({
  providedIn: 'root'
})
export class RequeteRisqueService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getAllRequetes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/requetesrisque`);
  }

  getRequetesParFiltres(aRisque: boolean | undefined, application: string, requete: string): Observable<any[]> {
    let params = new HttpParams();
    if (aRisque !== undefined) {
      params = params.append('aRisque', aRisque.toString());
    }
    if (application) {
      params = params.append('application', application);
    }
    if (requete) {
      params = params.append('requete', requete);
    }
    return this.http.get<any[]>(`${this.apiUrl}/requetesrisque/filtered`, { params });
  }
}
