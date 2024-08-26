import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Router, RouterModule} from "@angular/router";
import {UserService} from "../services/user.service";


@Component({
  selector: 'app-navbar',

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  fullname: string = '';
  userrole: string = '';
  showNotifications = false;

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }

  constructor(private userService: UserService,private router: Router) {}

  ngOnInit(): void {
    this.fullname = this.userService.getUserFullname();
    this.userrole = this.userService.getUserRole();


  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

}
