import {Component, OnInit} from '@angular/core';
import * as XLSX from 'xlsx';
import { CommonModule, NgForOf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { NgxPaginationModule } from "ngx-pagination";
import {query} from "@angular/animations";
import {DemandeService} from "../../services/demande.service";
import {UserService} from "../../services/user.service";
import {Demande} from "../../demande.model";

// list of entities
const entityList = [
  'AJ5', 'AJ8', 'AJ9', 'BJR', 'CDN', 'CM7', 'DTV', 'ERT', 'FC4', 'GYL',
  'HD4', 'JR4', 'LT7', 'MFT', 'MT4', 'NGF', 'NJR', 'NRK', 'PK2', 'PWN',
  'QFY', 'QSN', 'QVR', 'TCD', 'TCJ', 'TF7', 'TGU', 'TXR', 'UIB', 'VQR', 'WLK'
];
@Component({
  selector: 'app-habiliter-utilisateur',
  templateUrl: './habiliter-utilisateur.component.html',
  styleUrl: './habiliter-utilisateur.component.css'
})
export class HabiliterUtilisateurComponent implements OnInit{
  CUIDs: string[] = [];
  entities: string[][] = [];
  selectedCuid: string = '';
  selectedEntity: string = '';
  queries: Array<{ cuid: string, query: string, editMode: boolean }> = [];
  demandNumber: string = '';
  typeDemande = 'Habiliter des utilisateurs à des entités';
  fullname: string=''; // Déclarez la propriété fullname

  constructor(private http: HttpClient, private demandeService: DemandeService,private userService: UserService) {}


  entityList: string[] = [
    'AJ5', 'AJ8', 'AJ9', 'BJR', 'CDN', 'CM7', 'DTV', 'ERT', 'FC4', 'GYL',
    'HD4', 'JR4', 'LT7', 'MFT', 'MT4', 'NGF', 'NJR', 'NRK', 'PK2', 'PWN',
    'QFY', 'QSN', 'QVR', 'TCD', 'TCJ', 'TF7', 'TGU', 'TXR', 'UIB', 'VQR', 'WLK'
  ];
  ngOnInit(): void {
    this.fullname = this.userService.getUserFullname();
    sessionStorage.setItem('typeDemande', this.typeDemande);

  }

  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      const data = <any[][]>(XLSX.utils.sheet_to_json(ws, {header: 1}));

      this.CUIDs = data.slice(7, 500).map(row => row[0]).filter(Boolean); // A8 to A500, filter out empty values
      this.entities = data.slice(7, 500).map(row => row.slice(3, 40).filter(Boolean)); // D8 to AN8, filter out empty values
    };
    reader.readAsBinaryString(target.files[0]);
  }
  addNewCUID(newCUIDValue: string) {
    if (newCUIDValue.trim() !== '') {
      this.CUIDs.push(newCUIDValue);
      this.selectedCuid = newCUIDValue; // Sélectionne le nouveau CUID ajouté
      alert('Le CUID a été ajouté avec succès.');
    } else {
      alert('Veuillez saisir un CUID.');
    }
}
  createInsertQuery(cuid: string, code: string): string {
    return `INSERT INTO UTILISATEUR_MULTI_ENTITE (SELECT UTI_ID FROM UTILISATEURS WHERE UTI_LOGIN IN (UPPER('${cuid}'), LOWER('${cuid}')), (SELECT ENT_ID FROM ENTITE_FT WHERE ENT_CODE = '${code}'));`;
  }

  generateQueries() {
    const demande: Demande = {
      numeroDemande: this.demandNumber,
      typeDemande: this.typeDemande,
      utilisateur: this.fullname
    };

    this.demandeService.saveDemande(demande).subscribe(response => {
      console.log('Demande sauvegardée', response);
    });

    if (this.selectedCuid.trim() === '') {
      // Si aucun CUID spécifique n'est sélectionné, génère des requêtes pour tous les CUIDs
      this.CUIDs.forEach((cuid, index) => {
        const entities = this.entities[index];
        entities.forEach((entity) => {
          if (entity.toLowerCase() === 'toutes') {
            // Si "toutes" est trouvé, créer une requête pour chaque entité dans la liste
            this.entityList.forEach(code => {
              const query = this.createInsertQuery(cuid, code);
              this.queries.push({ cuid, query, editMode: false });
            });
          } else {
            const query = this.createInsertQuery(cuid, entity);
            this.queries.push({ cuid, query, editMode: false });
          }
        });
      });
    } else {
      if (this.selectedEntity.toLowerCase() === 'toutes') {
        // Si "toutes" est sélectionné, génère une requête pour chaque entité dans la liste
        this.entityList.forEach(code => {
          const query = this.createInsertQuery(this.selectedCuid, code);
          this.queries.push({ cuid: this.selectedCuid, query, editMode: false });
        });
      } else {
        // Sinon, génère des requêtes pour les entités spécifiées
        const entCodes = this.selectedEntity.split(',').map(ent => ent.trim());
        entCodes.forEach(code => {
          const query = this.createInsertQuery(this.selectedCuid, code);
          this.queries.push({ cuid: this.selectedCuid, query, editMode: false });
        });
      }
    }
  }
  exportQueries() {
    let csvContent = "data:text/csv;charset=utf-8,";

    this.queries.forEach(query => {
      csvContent += `${this.selectedCuid},${query.query}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "queries.csv");
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
  }
  onCUIDChange() {
    const cuidIndex = this.CUIDs.indexOf(this.selectedCuid);
    if (cuidIndex !== -1) {
      const entitiesString = this.entities[cuidIndex].join(',');
      this.selectedEntity = entitiesString; // Mettre à jour selectedEntity avec les entités du fichier Excel
    } else {
      this.selectedEntity = ''; // Réinitialiser selectedEntity si aucun CUID correspondant n'est trouvé
    }
  }



  toggleEditMode(index: number) {
    this.queries[index].editMode = !this.queries[index].editMode;
  }


  saveQuery(index: number) {
    this.queries[index].editMode = false;
    alert('La requête a été modifiée avec succès.');
  }

  editQuery(index: number) {
    this.queries[index].editMode = true;
  }

  copyQuery(query: string) {
    navigator.clipboard.writeText(query).then(() => {
      alert('Query copied to clipboard');
    });
  }

  exportAllQueries() {
    const allQueries: string[] = this.queries.map(q => q.query);
    const csvContent = allQueries.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'queries.csv';
    a.click();
    URL.revokeObjectURL(url);
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

}
