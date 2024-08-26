import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import hljs from 'highlight.js';
import sql from 'highlight.js/lib/languages/sql';
import {saveAs} from "file-saver";
import {DemandeService} from "../../services/demande.service";
import {UserService} from "../../services/user.service";
import {Demande} from "../../demande.model";

hljs.registerLanguage('sql', sql);

interface CricOption {
  value: string;
  label: string;
}
@Component({
  selector: 'app-activite-produit',
  templateUrl: './activite-produit.component.html',
  styleUrl: './activite-produit.component.css'
})
export class ActiviteProduitComponent implements OnInit{
  forms: any[] = [{ actCode: '', proCode: '', type: '' }];
  queries: any[] = [];
  demandNumber: string = '';
  typeDemande = 'Créer un code Fournisseur';
  fullname: string=''; // Déclarez la propriété fullname

  constructor(private http: HttpClient, private demandeService: DemandeService,private userService: UserService) {}

  ngOnInit(): void {
    this.fullname = this.userService.getUserFullname();
    sessionStorage.setItem('typeDemande', this.typeDemande);

  }

  addForm() {
    this.forms.push({ actCode: '', proCode: '', type: '' });
  }

  generateQueries() {
    const demande: Demande = {
      numeroDemande: this.demandNumber,
      typeDemande: this.typeDemande,
      utilisateur:  this.fullname
    };

    this.demandeService.saveDemande(demande).subscribe(response => {
      console.log('Demande sauvegardée', response);
    });
    this.queries = [];
    this.forms.forEach((form, index) => {
      if (form.type !== '') {
        const query = {
          requete: `insert into ACT_PRO_CRIC values ('${form.actCode}', '${form.proCode}', '${form.type}', 1, null);`,
          editMode: false
        };
        this.queries.push(query);
      }
    });
  }

  exportQueries() {
    const csvContent = this.queries.map(q => q.requete.replace(/, /g, ',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'queries.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  highlightSQL(query: string): string {
    const keywords = ['SELECT', 'UPDATE', 'INSERT', 'DELETE', 'FROM', 'WHERE', 'AND', 'OR', 'IN', 'SET', 'VALUES', 'JOIN', 'LEFT', 'RIGHT', 'INNER', 'OUTER', 'ON', 'GROUP BY', 'ORDER BY', 'ASC', 'DESC', 'LIMIT'];
    let coloredQuery = query.replace(
      new RegExp('\\b(' + keywords.join('|') + ')\\b', 'gi'),
      '<span class="text-primary">$1</span>'
    );
    coloredQuery = coloredQuery.replace(
      /'[^']*'/g,
      '<span class="text-success">$&</span>'
    );
    return coloredQuery;
  }

  toggleEditMode(index: number) {
    this.queries[index].editMode = !this.queries[index].editMode;
  }

  modifyQuery(index: number, actCode: string, proCode: string, type: string) {
    const query = `insert into ACT_PRO_CRIC values ('${actCode}', '${proCode}', '${type}', 1, null);`;
    this.queries[index].requete = query;
    this.queries[index].editMode = false; // Désactive le mode d'édition après la modification

    // Afficher une alerte pour indiquer que la modification a été effectuée avec succès
    alert('La requête a été modifiée avec succès !');
  }

  copyQuery(requete: string) {
    navigator.clipboard.writeText(requete)
      .then(() => {
        alert('La requête a été copiée avec succès !');
      })
      .catch((error) => {
        alert('Une erreur est survenue lors de la copie de la requête : ' + error);
      });
  }
}
