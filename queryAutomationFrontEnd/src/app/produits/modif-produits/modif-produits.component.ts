import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DemandeService} from "../../services/demande.service";
import {UserService} from "../../services/user.service";
import {Demande} from "../../demande.model";

@Component({
  selector: 'app-modif-produits',
  templateUrl: './modif-produits.component.html',
  styleUrl: './modif-produits.component.css'
})
export class ModifProduitsComponent implements OnInit{
  productCode: string = '';
  libelleProduit: string = '';
  analyseEssai: string = '';
  controleEssaiHautDebit: string = '';
  requetes: any[] = [];
  indexToDelete: number | null = null;
  demandNumber: string = '';
  typeDemande = 'Ajouter un produit';
  fullname: string=''; // Déclarez la propriété fullname
  lignes: { codeProduit: string, libelleProduit: string, proFibre: number,proAnalyseEssai: number,proControleEssai:number, ProControleEssaiHD: number, proMasquagePrixClient: number }[] = [
    { codeProduit: '',  libelleProduit: '', proFibre: 0,proAnalyseEssai:0,proControleEssai:0, ProControleEssaiHD: 0, proMasquagePrixClient: 0 }
  ];

  constructor(private http: HttpClient, private demandeService: DemandeService,private userService: UserService) {}
  ngOnInit(): void {
    this.fullname = this.userService.getUserFullname();
    sessionStorage.setItem('typeDemande', this.typeDemande);

  }
  addLine(): void {
    this.lignes.push({ codeProduit: '', libelleProduit: '', proFibre: 0,proAnalyseEssai:0,proControleEssai:0,ProControleEssaiHD: 0, proMasquagePrixClient: 0 });
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
    this.requetes = [
      {
        champ: 'Libellé Produit',
        requete: `UPDATE PRODUITS SET PRO_LIBELLE='${this.libelleProduit}' WHERE PRO_CODE='${this.productCode}'`,
        editable: false
      },
      {
        champ: 'Analyse d\'essai',
        requete: `UPDATE PRODUITS SET PRO_ANALYSE_ESSAI='${this.analyseEssai}' WHERE PRO_CODE='${this.productCode}'`,
        editable: false
      },
      {
        champ: 'Contrôle Essai Haut Débit',
        requete: `UPDATE PRODUITS SET PRO_CONTROLE_ESSAI_HAUT_DEBIT='${this.controleEssaiHautDebit}' WHERE PRO_CODE='${this.productCode}'`,
        editable: false
      }
    ];
  }

  copyQuery(requete: string) {
    // Copier la valeur du champ "Requête"
    navigator.clipboard.writeText(requete)
      .then(() => {
        // Vous pouvez ajouter ici une confirmation ou une action supplémentaire après la copie
        alert('La requête a été copiée avec succès !');
      })
      .catch((error) => {
        // Gérer l'erreur ou afficher un message à l'utilisateur si la copie a échoué
        alert('Une erreur est survenue lors de la copie de la requête : ' + error);
      });
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

  editerRequete(index: number) {
    this.requetes[index].editable = !this.requetes[index].editable;
  }


  confirmerSuppression(index: number) {
    this.indexToDelete = index;
    const confirmationModal: any = document.getElementById('confirmationModal');
    confirmationModal.style.display = 'block';
  }

  supprimerRequete() {
    if (this.indexToDelete !== null) {
      this.requetes.splice(this.indexToDelete, 1);
      this.indexToDelete = null;
    }
    this.fermerModal();
  }

  fermerModal() {
    const confirmationModal: any = document.getElementById('confirmationModal');
    confirmationModal.style.display = 'none';
  }

  exportQueries() {
    let csvContent = "data:text/csv;charset=utf-8,";
    this.requetes.forEach(req => {
      csvContent += `${req.requete}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "requetes.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  enregistrerProduit() {
    // Logique pour enregistrer les modifications de produit dans la base de données
    alert('Produit enregistré avec succès!');
  }
}
