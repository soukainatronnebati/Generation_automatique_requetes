import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  private apiUrl = 'http://localhost:8080/api/template';

  constructor(private http: HttpClient) { }

  createTemplate(template: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/save`, template);
  }

  getTemplates(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/list`);
  }
}
