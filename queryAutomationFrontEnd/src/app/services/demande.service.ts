import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Demande} from "../demande.model";

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private apiUrl = 'http://localhost:8080/api/demandes'; // Changez l'URL si nécessaire

  constructor(private http: HttpClient) {}

  getAllDemandes(): Observable<Demande[]> {
    return this.http.get<Demande[]>(`${this.apiUrl}/list`);
  }

  saveDemande(demande: Demande): Observable<Demande> {
    return this.http.post<Demande>(`${this.apiUrl}/save`, demande);
  }
}
