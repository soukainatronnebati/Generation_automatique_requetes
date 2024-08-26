import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Router} from "@angular/router";
import {AppStateService} from "./app-state.service";
import {response} from "express";

interface TokenPayload {
  role: string; // Assurez-vous que la propriété role est correctement définie
  // Autres propriétés du payload si nécessaire
}
@Injectable({
  providedIn: 'root'
})

export class UserService {
  private loginUrl = 'http://localhost:8080/api/v1/auth/authenticate';
  private registerApiUrl = 'http://localhost:8080/api/v1/auth/register';
  private usersApiUrl = 'http://localhost:8080/api/v1/auth/users';
  private baseUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private http: HttpClient, private router: Router, private appState: AppStateService) {
  }

  private isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  getUserFullname(): string {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem('fullname') || '';
    }
    return '';
  }

  createUser(userData: any): Observable<any> {
    return this.http.post<any>(this.registerApiUrl, userData);
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/edit/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(this.loginUrl, credentials).pipe(
      tap(response => {
        if (response && response.token && this.isLocalStorageAvailable()) {
          localStorage.setItem('accessToken', response.token);
          localStorage.setItem('fullname', response.fullname);
          localStorage.setItem('email', response.email);
          localStorage.setItem('role', response.role); // Assurez-vous que 'role' est dans la réponse du backend
        }
      })
    );
  }
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usersApiUrl);
  }
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);

  }
  getUserEmail(): string {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem('email') || '';
    }
    return '';
  }

  getUserrole(): string {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem('role') || '';
    }
    return '';
  }


  isLoggedIn(): boolean {
    if (this.isLocalStorageAvailable()) {
      const token = localStorage.getItem('accessToken');
      return !!token;
    }
    return false;
  }

  getUserRole(): string {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem('role') || '';
    }
    return '';
  }

  setAuthStateFromToken() {
    if (this.isLocalStorageAvailable()) {
      const token = localStorage.getItem('accessToken');
      if (token) {
        try {
          const payload: TokenPayload = JSON.parse(atob(token.split('.')[1]));
          console.log('Extracted role from token:', payload.role); // Vérifier le rôle extrait
          this.appState.setAuthState({
            isAuthenticated: true,
            roles: [payload.role], // Assurez-vous que le rôle est correctement défini
            token: token,
          });
        } catch (error) {
          console.error('Error decoding token:', error);
          this.appState.setAuthState({
            isAuthenticated: false,
            roles: undefined,
            token: undefined,
          });
        }
      } else {
        this.appState.setAuthState({
          isAuthenticated: false,
          roles: undefined,
          token: undefined,
        });
      }
    } else {
      this.appState.setAuthState({
        isAuthenticated: false,
        roles: undefined,
        token: undefined,
      });
    }
  }
}
