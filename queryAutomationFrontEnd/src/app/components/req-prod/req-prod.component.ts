import {Component, OnInit, ViewChild} from '@angular/core';
import {FileDownloadService} from "../../services/file-download.service";
import {MatTableDataSource} from "@angular/material/table";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";
import {HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-req-prod',
  templateUrl: './req-prod.component.html',
  styleUrl: './req-prod.component.css'
})
export class ReqProdComponent  implements OnInit {
  reqProds: any[] = [];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();
  public displayedColumns: string[] = ['nom', 'application', 'requete'];
  filterNomRequete: string = '';
  selectedApplication: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  private apiUrl = 'http://localhost:8080/api/req_prod';

  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit() {
    this.getReqProds().subscribe(
      data => {
        this.reqProds = data;
        this.dataSource = new MatTableDataSource(this.reqProds);
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.log(error);
      }
    );
  }

  getReqProds() {
    return this.http.get<any[]>(this.apiUrl);
  }

  applyFilter() {
    let params = new HttpParams();
    if (this.selectedApplication) {
      params = params.append('application', this.selectedApplication);
    }
    if (this.filterNomRequete) {
      params = params.append('nom', this.filterNomRequete);
    }
    this.http.get<any[]>(`${this.apiUrl}/filtered`, { params }).subscribe(
      data => {
        this.dataSource.data = data;
      },
      error => {
        console.error('Erreur lors du filtrage des requêtes', error);
      }
    );
  }
  navigateToNewReqProd() {
    this.router.navigate(['/new-req-prod']);
  }

  downloadReqProd(id: number, nom: string): void {
    this.http.get(`${this.apiUrl}/download/${id}`, { responseType: 'blob' }).subscribe(blob => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = `${nom}.txt`;
      a.click();
      URL.revokeObjectURL(objectUrl);
    });
  }
}
