import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent implements OnInit{
  template: any[] = [];

  public dataSource: MatTableDataSource<any> = new MatTableDataSource();
  public displayedColumns: string[] = ['nom_demande', 'typetemp', 'requetes', 'modopFile'];
  filterNomRequete: string = '';
  selectedApplication: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  private apiUrl = 'http://localhost:8080/api/template';

  constructor(private http: HttpClient, private router: Router) {}

  gettemplate() {
    return this.http.get<any[]>(`${this.apiUrl}/list`);
  }

  ngOnInit() {
    this.gettemplate().subscribe(
      data => {
        this.template = data;
        this.dataSource = new MatTableDataSource(this.template);
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.log(error);
      }
    );
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

  navigateToNew() {
    this.router.navigate(['/NewTemplate']);
  }

  downloadReqProd(id: number, requetes: string): void {
    this.http.get(`${this.apiUrl}/download/${id}`, { responseType: 'blob' }).subscribe(blob => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = `${requetes}.txt`;
      a.click();
      URL.revokeObjectURL(objectUrl);
    });
  }

  downloadModop(id: number, nomDemande: string): void {
    this.http.get(`${this.apiUrl}/downloadModop/${id}`, { responseType: 'blob' }).subscribe(blob => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = `${nomDemande}.docx`;
      a.click();
      URL.revokeObjectURL(objectUrl);
    });
  }
}
