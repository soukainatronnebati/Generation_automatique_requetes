import { Component } from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import {FormGroup, FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {UserService} from "../services/user.service";
import {catchError, throwError} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private userService: UserService, private router: Router) {}
  onForgotPassword() {
    // Redirection vers une page de réinitialisation du mot de passe
    this.router.navigate(['/forgot-password']);
  }

  onSubmit() {
    const loginData = { email: this.email, password: this.password };

    this.userService.login(loginData).pipe(
      catchError(err => {
        // Gestion des erreurs
        if (err.status === 403) {
          this.error = 'Accès interdit. Veuillez vérifier vos identifiants.';
        } else {
          this.error = 'Une erreur est survenue. Veuillez réessayer.';
        }
        return throwError(err);
      })
    ).subscribe(
      response => {
        console.log(response); // Vérifiez la réponse de l'API ici
        if (response && response.access_token) {
          localStorage.setItem('accessToken', response.access_token);
          localStorage.setItem('refreshToken', response.refresh_token);
          localStorage.setItem('role', response.role);
          localStorage.setItem('fullname', response.fullname);
          // Stocker le rôle dans le local storage
          // Redirection en fonction du rôle
          this.router.navigateByUrl('home');

        } else {
          this.error = 'Une erreur est survenue. Veuillez réessayer.';
        }
      },

    );
  }
}

