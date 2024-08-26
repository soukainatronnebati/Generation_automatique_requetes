import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrl: './utilisateurs.component.css'
})
export class UtilisateursComponent {
  users: any[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data.map(user => ({ ...user, verified: user.verified !== false })); // Assurez-vous que `verified` est défini à true par défaut
      },
      (error) => {
        console.error('Erreur lors du chargement des utilisateurs', error);
      }
    );
  }

  navigateToaddutilisateur() {
    this.router.navigate(['/addutilisateur']);
  }

  toggleVerification(user: any) {
    user.verified = !user.verified;
  }

  editUser(user: any) {
    // Logique pour éditer l'utilisateur (par exemple, ouvrir un formulaire avec les détails de l'utilisateur)
    this.router.navigate(['edit-user', user.id]);
  }

  deleteUser(user: any) {
    if (window.confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) {
      this.userService.deleteUser(user.id).subscribe(
        () => {
          this.users = this.users.filter(u => u.id !== user.id);
        },
        (error) => {
          console.error('Erreur lors de la suppression de l\'utilisateur', error);
        }
      );
    }
  }
}
