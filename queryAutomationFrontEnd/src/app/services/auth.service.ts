import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom, Observable} from "rxjs";
import {AppStateService} from "./app-state.service";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/api/v1/auth/authenticate';
  private registerApiUrl = 'http://localhost:8080/api/v1/auth/register';
  private usersApiUrl = 'http://localhost:8080/api/admin/users';
  authenticateUser(user: any) {
    throw new Error('Method not implemented.');
  }

  constructor(public http:HttpClient,
              public appState:AppStateService) { }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(this.loginUrl, credentials);
  }

}
