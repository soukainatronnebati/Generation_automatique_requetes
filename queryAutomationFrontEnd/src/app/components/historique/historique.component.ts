import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {DemandeService} from "../../services/demande.service";
import {Demande} from "../../demande.model";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";


@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.css'
})
export class HistoriqueComponent implements OnInit {
  dataSource = new MatTableDataSource<Demande>([]);

  displayedColumns: string[] = ['numeroDemande', 'dateCreation', 'utilisateur', 'typeDemande'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient, private demandeService: DemandeService) {}

  ngOnInit(): void {
    this.demandeService.getAllDemandes().subscribe(data => {
      this.dataSource.data = data;  // Bind data to dataSource
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
