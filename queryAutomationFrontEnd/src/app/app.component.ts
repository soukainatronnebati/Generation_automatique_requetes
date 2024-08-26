import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'queryAutomationFrontEnd';
  showSidebar: boolean = true;
  showNavbar: boolean = true;

  constructor(private router: Router, private userService: UserService) {}

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  ngOnInit() {
    // Initialiser l'état d'authentification depuis le token

    // Abonnement aux événements de navigation
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
       //this.showSidebar = !(url === '/login'); // Masquer la sidebar pour la route '/login'
       this.showNavbar = !(url === '/login'); // Masquer la navbar pour la route '/login'
      }
    });
  }
}
