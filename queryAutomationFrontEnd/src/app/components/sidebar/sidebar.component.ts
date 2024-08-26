import { Component } from '@angular/core';
import {
  faTachometerAlt,
  faCog,
  faTable,
  faEdit,
  faChartBar,
  faIcons,
  faTh,
  faDatabase
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isActive: boolean = false;
  faTachometerAlt = faTachometerAlt;
  faCog = faCog;
  faTable = faTable;
  faEdit = faEdit;
  faChartBar = faChartBar;
  faIcons = faIcons;
  faTh = faTh;

  toggleSidebar() {
    this.isActive = !this.isActive;
  }

  protected readonly faDatabase = faDatabase;
}
