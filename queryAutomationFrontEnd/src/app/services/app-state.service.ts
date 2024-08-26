import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AppStateService {
  public authState: any = {
    fullname: '',
    isAuthenticated: false,
    role: '',
    token: '',
  };

  public setAuthState(state: any) {
    this.authState = { ...this.authState, ...state };
    console.log('Updated auth state:', this.authState); // Ajout du log pour vérifier l'état mis à jour
  }
}
