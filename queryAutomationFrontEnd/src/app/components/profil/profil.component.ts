import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent implements OnInit{
  fullname: string='';
  email: string='';
  role: string='';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fullname = this.userService.getUserFullname();
    this.email = this.userService.getUserEmail();
    this.role = this.userService.getUserRole();
  }
}
