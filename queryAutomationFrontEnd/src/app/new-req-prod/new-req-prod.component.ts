import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {UserService} from "../services/user.service";
import {ReqProdService} from "../services/req-prod.service";
import {Requetes} from "../model/requetes.model";


@Component({
  selector: 'app-new-req-prod',
  templateUrl: './new-req-prod.component.html',
  styleUrl: './new-req-prod.component.css'
})
export class NewReqProdComponent {
  requetes: Requetes = new Requetes();

  constructor(private reqProdService: ReqProdService, private router: Router) {}

  onSubmit() {
    this.reqProdService.createRequete(this.requetes).subscribe(response => {
      console.log('Requete created successfully!');
      this.router.navigate(['/requetes']);
    }, error => {
      console.error('Error creating requete:', error);
    });
  }

  onCancel() {
    this.router.navigate(['/requetes']);
  }

}
