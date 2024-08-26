import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import {DemandeService} from "../../services/demande.service";
import {UserService} from "../../services/user.service";
import {Demande} from "../../demande.model";

@Component({
  selector: 'app-add-activite',
  templateUrl: './add-activite.component.html',
  styleUrl: './add-activite.component.css'
})
export class AddActiviteComponent implements OnInit{
  numeroDemande: string = '';
  lignes: { codeProduit: string, selectedDomaine: string, libelleActivite: string, actNonRenseigne: number, actMasquagePrixClient: number, actControleEssai: number }[] = [
    { codeProduit: '', selectedDomaine: '', libelleActivite: '', actNonRenseigne: 0, actMasquagePrixClient: 0, actControleEssai: 0 }
  ];

  domaines: string[] = [
    "Etude", "Maintenance", "Production", "Autre"
  ];

  queries: { query: string, actions: string[] }[] = [];
  domainCodes: { [key: string]: number } = {
    "Etude": 4,
    "Maintenance": 1,
    "Production": 2,
    "Autre": 3
  };
  demandNumber: string = '';
  typeDemande = 'Ajouter Code Activité';
  fullname: string = ''; // Déclarez la propriété fullname

  constructor(private http: HttpClient, private demandeService: DemandeService, private userService: UserService) {}

  ngOnInit(): void {
    this.fullname = this.userService.getUserFullname();
    sessionStorage.setItem('typeDemande', this.typeDemande);
  }

  addLine(): void {
    this.lignes.push({ codeProduit: '', selectedDomaine: '', libelleActivite: '', actNonRenseigne: 0, actMasquagePrixClient: 0, actControleEssai: 0 });
  }

  generateQuery(): void {
    const demande: Demande = {
      numeroDemande: this.demandNumber,
      typeDemande: this.typeDemande,
      utilisateur: this.fullname
    };

    this.demandeService.saveDemande(demande).subscribe(response => {
      console.log('Demande sauvegardée', response);
    });
    console.log('Generating queries...');

    // this.queries = []; // Retirez cette ligne pour éviter de réinitialiser la liste des requêtes

    this.lignes.forEach(ligne => {
      const { codeProduit, selectedDomaine, libelleActivite, actNonRenseigne, actMasquagePrixClient, actControleEssai } = ligne;

      if (codeProduit && selectedDomaine && libelleActivite) {
        const domainCode = this.domainCodes[selectedDomaine];
        const query = `INSERT INTO ACTIVITE VALUES ('${codeProduit}', ${domainCode}, '${libelleActivite}', CURRENT_TIMESTAMP, null, ${actNonRenseigne}, ${actMasquagePrixClient}, ${actControleEssai});`;

        this.queries.push({
          query,
          actions: ['Copier', 'Modifier']
        });
      }
    });
    console.log('Generated queries:', this.queries);
  }

  copyQuery(query: string): void {
    navigator.clipboard.writeText(query).then(() => {
      alert('Requête copiée dans le presse-papier');
    }, (err) => {
      console.error('Erreur lors de la copie de la requête : ', err);
    });
  }

  modifyQuery(query: string): void {
    alert('Modification de la requête non implémentée');
  }

  exportQueries(): void {
    if (this.queries.length === 0) {
      console.warn('Aucune requête à exporter.');
      return;
    }

    const csvData = this.queries.map(query => query.query + ';').join('\n');
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'queries.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  saveQueries() {
    // Implementation for saving queries
  }
}
