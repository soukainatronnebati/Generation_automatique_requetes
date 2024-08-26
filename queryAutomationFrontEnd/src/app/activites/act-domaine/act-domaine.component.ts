import {Component, OnInit} from '@angular/core';
import {DATE_PIPE_DEFAULT_OPTIONS, DatePipe} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {DemandeService} from "../../services/demande.service";
import {UserService} from "../../services/user.service";
import {Demande} from "../../demande.model";

@Component({
  selector: 'app-act-domaine',
  templateUrl: './act-domaine.component.html',
  styleUrl: './act-domaine.component.css'
})
export class ActDomaineComponent implements OnInit{

  lignes: { codeActivite: string, selectedDomaine: string, libelleActivite: string, actNonRenseigne: number, actMasquagePrixClient: number, actControleEssai: number }[] = [
    { codeActivite: '', selectedDomaine: '', libelleActivite: '', actNonRenseigne: 0, actMasquagePrixClient: 0, actControleEssai: 0 }
  ];
  demandNumber: string = '';
  typeDemande = 'Modifier un Code Activité';
  fullname: string=''; // Déclarez la propriété fullname

  constructor(private http: HttpClient, private demandeService: DemandeService,private userService: UserService) {}

  ngOnInit(): void {
    this.fullname = this.userService.getUserFullname();
    sessionStorage.setItem('typeDemande', this.typeDemande);

  }

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

  addLine(): void {
    this.lignes.push({ codeActivite: '', selectedDomaine: '', libelleActivite: '', actNonRenseigne: 0, actMasquagePrixClient: 0, actControleEssai: 0 });
  }

  generateQuery(): void {
    const demande: Demande = {
      numeroDemande: this.demandNumber,
      typeDemande: this.typeDemande,
      utilisateur:  this.fullname
    };

    this.demandeService.saveDemande(demande).subscribe(response => {
      console.log('Demande sauvegardée', response);
    });
    console.log('Generating queries...');
    this.queries = [];

    this.lignes.forEach(ligne => {
      const { codeActivite, selectedDomaine, libelleActivite, actNonRenseigne, actMasquagePrixClient, actControleEssai } = ligne;
      let setClauses = [];

      if (selectedDomaine) {
        setClauses.push(`dom_code = ${this.domainCodes[selectedDomaine]}`);
      }

      if (libelleActivite) {
        setClauses.push(`ACT_LIBELLE = '${libelleActivite}'`);
      }

      if (actNonRenseigne !== 0) {
        setClauses.push(`ACT_NON_RENSEIGNE = ${actNonRenseigne}`);
      }

      if (actMasquagePrixClient !== 0) {
        setClauses.push(`ACT_MASQUAGE_PRIX_CLIENT = ${actMasquagePrixClient}`);
      }

      if (actControleEssai !== 0) {
        setClauses.push(`ACT_CONTROLE_ESSAI = ${actControleEssai}`);
      }

      if (setClauses.length > 0 && codeActivite) {
        const query = `UPDATE activite SET ${setClauses.join(', ')}, act_date_modification = CURRENT_TIMESTAMP WHERE act_code = '${codeActivite}';`;
        this.queries.push({
          query: query,
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
