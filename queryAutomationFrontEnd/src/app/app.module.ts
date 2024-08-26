import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgChartsModule} from 'ng2-charts';

import { AppComponent } from './app.component';
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule, provideHttpClient, withFetch} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import {ActiviteProduitComponent} from "./components/activite-produit/activite-produit.component";
import {AddProduitComponent} from "./components/add-produit/add-produit.component";
import {CodeFournisseurComponent} from "./components/code-fournisseur/code-fournisseur.component";
import {HabilitationComponent} from "./components/habilitation/habilitation.component";
import {HabiliterUtilisateurComponent} from "./components/habiliter-utilisateur/habiliter-utilisateur.component";
import {HistoriqueComponent} from "./components/historique/historique.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {ProduitsComponent} from "./produits/produits.component";
import {CodeReleveComponent} from "./produits/code-releve/code-releve.component";
import {CodeSituationComponent} from "./components/code-situation/code-situation.component";
import {ReferencielComponent} from "./referenciel/referenciel.component";
import {ActivitesComponent} from "./activites/activites.component";
import {AddActiviteComponent} from "./components/add-activite/add-activite.component";
import { HomeComponent } from './components/home/home.component';
import {LoginComponent} from "./login/login.component";
import { ActDomaineComponent } from './activites/act-domaine/act-domaine.component';
import { UtilisateursComponent } from './components/utilisateurs/utilisateurs.component';
import { AddUtilisateurComponent } from './components/add-utilisateur/add-utilisateur.component';
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AuthGuard} from "./guards/auth.guard";
import { AIQueryComponent } from './aiquery/aiquery.component';
import { AdminComponent } from './components/admin/admin.component';
import { ListproduitsComponent } from './produits/listproduits/listproduits.component';
import { ModifProduitsComponent } from './produits/modif-produits/modif-produits.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatButton, MatButtonModule, MatIconButton} from "@angular/material/button";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatMenu, MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import { ReqProdComponent } from './components/req-prod/req-prod.component';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import { NetworkComponent } from './network/network.component';
import { RequeteRisqueComponent } from './components/requete-risque/requete-risque.component';
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {InjectableRxStompConfig, RxStompService} from "@stomp/ng2-stompjs";
import {StompConfig} from "@stomp/stompjs";
import { NotificationsComponent } from './notifications/notifications.component';
import { NewReqProdComponent } from './new-req-prod/new-req-prod.component';
import { NoAuthorizedComponent } from './components/no-authorized/no-authorized.component';
import {AppStateService} from "./services/app-state.service";
import {jwtDecode} from "jwt-decode";
import {MatSortModule} from "@angular/material/sort";
import { TemplateComponent } from './components/template/template.component';
import { PermissionComponent } from './permission/permission.component';
import { AddTemplateComponent } from './components/add-template/add-template.component';
import { EditRequeteComponent } from './components/edit-requete/edit-requete.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ProfilComponent } from './components/profil/profil.component';
import {MatChip} from "@angular/material/chips";


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    AppComponent,
    NavbarComponent,
    ProduitsComponent,
    CodeReleveComponent,
    ActiviteProduitComponent,
    AddProduitComponent,
    CodeFournisseurComponent,
    HabilitationComponent,
    HabiliterUtilisateurComponent,
    HistoriqueComponent,
    CodeSituationComponent,
    ReferencielComponent,
    ActivitesComponent,
    AddActiviteComponent,
    HomeComponent,
    ActDomaineComponent,
    UtilisateursComponent,
    AddUtilisateurComponent,

    SidebarComponent,
    AIQueryComponent,
    AdminComponent,
    ListproduitsComponent,
    ModifProduitsComponent,
    ReqProdComponent,
    NetworkComponent,
    RequeteRisqueComponent,
    NotificationsComponent,
    NewReqProdComponent,
    NoAuthorizedComponent,
    TemplateComponent,
    PermissionComponent,
    AddTemplateComponent,
    EditRequeteComponent,
    EditUserComponent,
    ProfilComponent
  ],
    imports: [
        NgChartsModule,
        BrowserModule,
        AppRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        MatSelectModule,
        MatOptionModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatCardModule,
        NgForOf,
        NgIf,
        CommonModule,
        FormsModule,
        MatTableModule,
        MatPaginatorModule,
        HttpClientModule,
        FontAwesomeModule,
        NgxPaginationModule,
        ReactiveFormsModule,
        NgMultiSelectDropDownModule.forRoot(),
        MatFormFieldModule,
        MatChip,


    ],
  providers: [
    provideHttpClient(withFetch()), // Ajouter withFetch() ici
    {

      provide: InjectableRxStompConfig,
      useValue: StompConfig
    },
    RxStompService,
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
