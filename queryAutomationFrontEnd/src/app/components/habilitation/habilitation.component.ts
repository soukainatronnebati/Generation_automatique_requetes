import {Component, OnInit} from '@angular/core';
import * as XLSX from 'xlsx';
import {NgForOf} from "@angular/common";
import { HttpClient } from '@angular/common/http';
import {DemandeService} from "../../services/demande.service";
import {UserService} from "../../services/user.service";
import {Demande} from "../../demande.model";

@Component({
  selector: 'app-habilitation',
  templateUrl: './habilitation.component.html',
  styleUrl: './habilitation.component.css'
})
export class HabilitationComponent implements OnInit{
  ExcelData: any[] = [];
  email: string = '';
  p: number = 1;
  requestNumber: string = ''; // Ajoutez cette ligne pour le numéro de demande
  demandNumber: string = '';
  typeDemande = 'Modifier email SIU Fournisseur';
  fullname: string=''; // Déclarez la propriété fullname

  constructor(private http: HttpClient, private demandeService: DemandeService,private userService: UserService) {}

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.fullname = this.userService.getUserFullname();
    sessionStorage.setItem('typeDemande', this.typeDemande);
  }

  ReadExcel(event: any) {
    let files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      let fileReader = new FileReader();
      fileReader.readAsBinaryString(files[i]);
      fileReader.onload = (e) => {
        let workBook = XLSX.read(fileReader.result, {type: 'binary'});
        let sheet = workBook.Sheets[workBook.SheetNames[0]];

        let emailCell = sheet['B3'].v;
        this.email = emailCell.replace(/\*$/, '');

        let row = 6;
        let SIUDs = [];
        let allEndWithZero = true;
        while (sheet['A' + row]) {
          let SIUD = sheet['A' + row].v.trim();
          if (!/0$/.test(SIUD)) {
            allEndWithZero = false;
          }
          SIUDs.push(SIUD);
          row++;
        }

        if (allEndWithZero) {
          console.log("Fichier erroné: Tous les SIUD se terminent par 0");
        } else {
          SIUDs.forEach(SIUD => {
            this.ExcelData.push({SIUD: SIUD, Email: this.email});
          });
        }
      }
    }
  }

  exportToCSV() {
    const header = ['siud', 'email'];
    const csvContent = header.join(';') + '\n' +
      this.ExcelData.map(row => Object.values(row).join(';')).join('\n');
    const blob = new Blob([csvContent], {type: 'text/csv;charset=utf-8;'});
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'Modification-Mails.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(link);
  }

  generateUpdateQueries() {

    let updateQueries: string[] = [];
    this.ExcelData.forEach(row => {
      let query = `UPDATE utilisateurs SET uti_email='${row.Email}' WHERE uti_login = '${row.SIUD}';`;
      updateQueries.push(query);
    });
    const csvContent = updateQueries.join('\n');
    const blob = new Blob([csvContent], {type: 'text/csv;charset=utf-8;'});
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'Requete_update.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(link);

    const demande: Demande = {
      numeroDemande: this.demandNumber,
      typeDemande: this.typeDemande,
      utilisateur:  this.fullname
    };

    this.demandeService.saveDemande(demande).subscribe(response => {
      console.log('Demande sauvegardée', response);
    });
  }

  generateSelectQueries() {
    let siudArray: string[] = [];
    this.ExcelData.forEach(row => {
      siudArray.push(row.SIUD);
    });
    let query = `SELECT * FROM utilisateurs WHERE uti_login IN ('${siudArray.join("','")}');`;
    const csvContent = query;
    const blob = new Blob([csvContent], {type: 'text/csv;charset=utf-8;'});
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'requete_select.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(link);
  }


}
