import {Component, OnInit} from '@angular/core';
import {RequeteRisque} from "../requete-risque/requete-risque.component";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-edit-requete',
  templateUrl: './edit-requete.component.html',
  styleUrl: './edit-requete.component.css'
})
export class EditRequeteComponent implements OnInit{
  requeteId: number;
  requeteRisque: RequeteRisque | null = null;
  private apiUrl = 'http://localhost:8080/api/requetesrisque';

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.requeteId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.loadRequete();
  }

  loadRequete() {
    this.http.get<RequeteRisque>(`${this.apiUrl}/${this.requeteId}`).subscribe(data => this.requeteRisque = data);
    // Assurez-vous que la conversion est correcte

  }
  // Méthode pour annuler les modifications et revenir à la page des requêtes
  cancel(): void {
    this.router.navigate(['/requetes']);
  }

  updateRequete() {
    if (this.requeteRisque) {
      this.http.put<RequeteRisque>(`${this.apiUrl}/${this.requeteId}`, this.requeteRisque).subscribe(() => this.router.navigate(['/requetes']));
    }
  }
}
