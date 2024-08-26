import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {QueryService} from "../services/query.service";

@Component({
  selector: 'app-aiquery',
  templateUrl: './aiquery.component.html',
  styleUrl: './aiquery.component.css'
})
export class AIQueryComponent {
  naturalLanguageQuery: string = '';
  sqlQuery: string = '';

  constructor(private queryService: QueryService) {}

  generateQuery() {
    this.queryService.generateQuery(this.naturalLanguageQuery).subscribe(
      response => {
        this.sqlQuery = response.sqlQuery;
      },
      error => {
        console.error('Error generating query:', error);
      }
    );
  }

}
