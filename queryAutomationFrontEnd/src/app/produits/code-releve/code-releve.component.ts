import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {DemandeService} from "../../services/demande.service";
import {UserService} from "../../services/user.service";
import {Demande} from "../../demande.model";


@Component({
  selector: 'app-code-releve',
  templateUrl: './code-releve.component.html',
  styleUrl: './code-releve.component.css'
})
export class CodeReleveComponent implements OnInit{
  demandNumber: string = '';
  typeDemande = 'Autoriser des codes Reléves';
  fullname: string=''; // Déclarez la propriété fullname

  constructor(private http: HttpClient, private demandeService: DemandeService,private userService: UserService) {}
  ngOnInit(): void {
    this.fullname = this.userService.getUserFullname();
    sessionStorage.setItem('typeDemande', this.typeDemande);

  }
  lignes: { codeProduit: string, selectedDomaine: string, codeReleve: string[] }[] = [
    {codeProduit: '', selectedDomaine: '', codeReleve: []}
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

  domaineReleves: { [key: string]: string[] } = {
    "Maintenance": ["ABS", "ANN", "DEF", "DIA", "DIP", "DOP", "ETU", "FIA", "ICI", "INL", "MAJ", "MAT", "PAD", "PDC", "PRO", "REO", "RMC", "RMF", "TSE", "TSO", "TVC"],
    "Production": ["ANC", "ANN", "DFA", "DMS", "DOS", "ETU", "MAJ", "MAT", "ORT", "PAD", "PBC", "REA", "REO", "RMC", "RMF", "RRC", "TKO", "TVC"],
    "Autre": ["ABS", "ANN", "DEF", "DIP", "DMS", "DOP", "FIA", "ICI", "INL", "MAJ", "PDC", "PRO", "REO", "RMC", "RMF", "TVC"],
    "Etude": ["ANN", "DEF", "DMS", "DOS", "ETS", "ETU", "INL", "MAJ", "MAT", "PBC", "REA", "REO", "RMC", "RMF", "TKO", "TVC"]
  };

  addLine(): void {
    this.lignes.push({codeProduit: '', selectedDomaine: '', codeReleve: []});
  }

  toggleCodeReleve(index: number, code: string): void {
    const codeReleveArray = this.lignes[index].codeReleve;
    const codeIndex = codeReleveArray.indexOf(code);
    if (codeIndex > -1) {
      codeReleveArray.splice(codeIndex, 1);
    } else {
      codeReleveArray.push(code);
    }
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
      const {codeProduit, selectedDomaine, codeReleve} = ligne;

      if (codeProduit && selectedDomaine && codeReleve.length > 0) {
        const domaineCode = this.domainCodes[selectedDomaine];
        codeReleve.forEach(code => {
          this.queries.push({
            query: `INSERT INTO RELEVE_PRODUIT VALUES ('${codeProduit}', '${code}', 0, ${domaineCode})`,
            actions: ['Copier', 'Modifier'],

          });
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

  modifyQuery() {
     // this.queries[index].editable = !this.queries[index].editable;

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

  }

}
