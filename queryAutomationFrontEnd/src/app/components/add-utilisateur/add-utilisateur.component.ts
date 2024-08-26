import {Component, OnInit} from '@angular/core';
import {IDropdownSettings} from "ng-multiselect-dropdown";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrl: './add-utilisateur.component.css'
})
export class AddUtilisateurComponent implements OnInit{
  constructor(private userService: UserService) { }

  ngOnInit() { }

  onSubmit(utilisateurForm: any) {
    const userData = {
      fullname: utilisateurForm.username,
      email: utilisateurForm.email,
      password: utilisateurForm.password,
      role: utilisateurForm.roles,  // Met à jour pour correspondre à la valeur attendue
      verified: utilisateurForm.verified || false // Par défaut à false si non défini
    };

    this.userService.createUser(userData).subscribe(
      (response) => {
        console.log('Utilisateur créé avec succès:', response);
        alert('Votre utilisateur a été bien ajouté');
        // Réinitialiser le formulaire ou effectuer d'autres actions si nécessaire
      },
      (error) => {
        console.error('Erreur lors de la création de l\'utilisateur:', error);
        alert('Erreur lors de la création de l\'utilisateur');
      }
    );
  }
}
