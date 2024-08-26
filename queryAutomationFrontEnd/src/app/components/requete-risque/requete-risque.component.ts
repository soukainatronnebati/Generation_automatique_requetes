import {Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {HttpParams} from "@angular/common/http";
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

export interface RequeteRisque {
  id: number;
  requete: string;
  namerequete: string;
  application: string;
  a_risque: boolean;
  solution: string;
}


@Component({
  selector: 'app-requete-risque',
  templateUrl: './requete-risque.component.html',
  styleUrl: './requete-risque.component.css'
})
export class RequeteRisqueComponent implements OnInit{
  requeteTitle: string = '';
  requeteRisque: RequeteRisque | null = null;
  error: string | null = null;
  private apiUrl = 'http://localhost:8080/api/requetesrisque';
  displayedColumns: string[] = ['nomRequete', 'requete', 'a_risque', 'solution', 'actions'];
  dataSource = new MatTableDataSource<RequeteRisque>([]);
  selectedStatut: string = '';
  filterNomRequete: string = '';
  selectedApplication: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient,private router:Router, public userService: UserService) {}

  ngOnInit() {
    this.loadRequetes();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  loadRequetes() {
    this.http.get<RequeteRisque[]>(this.apiUrl)
      .subscribe({
        next: (data) => {
          console.log('Données récupérées:', data);

          this.dataSource.data = data;
          this.error = null;
          this.dataSource.paginator = this.paginator;
        },
        error: (err) => {
          console.error('Erreur lors du chargement des requêtes', err);
          this.error = 'Erreur lors du chargement des requêtes';
          this.dataSource.data = [];
        }
      });
  }

  navigateToNew() {
    this.router.navigate(['/new-req-prod']);
  }

  editRequete(id: number) {
    // Implement navigation or modal to edit the request
    this.router.navigate(['/edit-requete', id]);
  }
  deleteRequete(id: number) {
    if (confirm('vous voulez vraiment supprimer cette requete?')) {
      this.http.delete(`${this.apiUrl}/${id}`).subscribe({
        next: () => {
          this.loadRequetes(); // Reload the list after deletion
        },
        error: (err) => {
          console.error('Error deleting request', err);
        }
      });
    }
  }

  applyFilter() {
    this.getRequetesParFiltres(
      this.selectedStatut === 'aRisque' ? true : this.selectedStatut === 'nonRisque' ? false : undefined,
      this.selectedApplication,
      this.filterNomRequete
    ).subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.error = null;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.error('Erreur lors du filtrage des requêtes', err);
        this.error = 'Erreur lors du filtrage des requêtes';
      }
    });
  }

  getRequetesParFiltres(aRisque: boolean | undefined, application: string, nomRequete: string) {
    let params = new HttpParams();
    if (aRisque !== undefined) {
      params = params.append('aRisque', aRisque.toString());
    }
    if (application) {
      params = params.append('application', application);
    }
    if (nomRequete) {
      params = params.append('namerequete', nomRequete);
    }
    return this.http.get<RequeteRisque[]>(`${this.apiUrl}/filtered`, { params });
  }

  downloadReqProd(id: number, requete: string): void {
    this.http.get(`${this.apiUrl}/download/${id}`, { responseType: 'blob' }).subscribe(blob => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = `${requete}.txt`;
      a.click();
      URL.revokeObjectURL(objectUrl);
    });
  }
}
