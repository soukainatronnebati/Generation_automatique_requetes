import {Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import {DemandeService} from "../../services/demande.service";
import {UserService} from "../../services/user.service";
import {Demande} from "../../demande.model";

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.css'
})
export class AddProduitComponent implements OnInit{
  proCode: string = '';
  queries: any[] = [];
  lignes: { codeProduit: string, libelleProduit: string, proFibre: number,proAnalyseEssai: number,proControleEssai:number, ProControleEssaiHD: number, proMasquagePrixClient: number }[] = [
    { codeProduit: '',  libelleProduit: '', proFibre: 0,proAnalyseEssai:0,proControleEssai:0, ProControleEssaiHD: 0, proMasquagePrixClient: 0 }
  ];

  demandNumber: string = '';
  typeDemande = 'Ajouter un produit';
  fullname: string=''; // Déclarez la propriété fullname

  constructor(private http: HttpClient, private demandeService: DemandeService,private userService: UserService) {}
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.fullname = this.userService.getUserFullname();
    sessionStorage.setItem('typeDemande', this.typeDemande);
  }
  addLine(): void {
    this.lignes.push({ codeProduit: '', libelleProduit: '', proFibre: 0,proAnalyseEssai:0,proControleEssai:0,ProControleEssaiHD: 0, proMasquagePrixClient: 0 });
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
    this.lignes.forEach(ligne => {
      const { codeProduit, libelleProduit, proFibre, proAnalyseEssai,proControleEssai, ProControleEssaiHD ,proMasquagePrixClient } = ligne;

      if (codeProduit  && libelleProduit) {
        const query = `INSERT INTO PRODUITS VALUES ('${codeProduit}', '${libelleProduit}', CURRENT_TIMESTAMP,null, ${proFibre},${proAnalyseEssai},${proControleEssai},${ProControleEssaiHD}, ${proMasquagePrixClient});`;
        this.queries.push({
          query,
          actions: ['Copier', 'Modifier']
        });
      }
    });
    console.log('Generated queries:', this.queries);
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
  modifyQuery(query: string): void {
    alert('Modification de la requête non implémentée');
  }

  copyQuery(query: string) {
    const textarea = document.createElement('textarea');
    textarea.value = query;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Requête copiée dans le presse-papiers!');
  }

  toggleEditMode(index: number) {
    this.queries[index].editMode = !this.queries[index].editMode;
  }

  deleteQuery(index: number) {
    this.queries.splice(index, 1);
  }

  exportQueries() {
    const csvContent = 'data:text/csv;charset=utf-8,' +
      this.queries.map(query => `${query.query}`).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'queries.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
