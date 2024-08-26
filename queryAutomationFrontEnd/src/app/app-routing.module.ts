import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProduitsComponent} from "./produits/produits.component";
import {AddProduitComponent} from "./components/add-produit/add-produit.component";
import {ActivitesComponent} from "./activites/activites.component";
import {AddActiviteComponent} from "./components/add-activite/add-activite.component";
import {ActiviteProduitComponent} from "./components/activite-produit/activite-produit.component";
import {CodeFournisseurComponent} from "./components/code-fournisseur/code-fournisseur.component";
import {HabiliterUtilisateurComponent} from "./components/habiliter-utilisateur/habiliter-utilisateur.component";
import {HabilitationComponent} from "./components/habilitation/habilitation.component";
import {CodeReleveComponent} from "./produits/code-releve/code-releve.component";
import {ReferencielComponent} from "./referenciel/referenciel.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {HistoriqueComponent} from "./components/historique/historique.component";
import {ActDomaineComponent} from "./activites/act-domaine/act-domaine.component";
import {UtilisateursComponent} from "./components/utilisateurs/utilisateurs.component";
import {AddUtilisateurComponent} from "./components/add-utilisateur/add-utilisateur.component";
//import {AuthGuardAdmin} from "./permissions/AuthGuardAdmin";
//import {UnauthorizedComponentComponent} from "./permissions/unauthorized-component/unauthorized-component.component";
//import {SidebarComponent} from "./components/sidebar/sidebar.component";

import {AIQueryComponent} from "./aiquery/aiquery.component";
import {AdminComponent} from "./components/admin/admin.component";
import {ListproduitsComponent} from "./produits/listproduits/listproduits.component";
import {ModifProduitsComponent} from "./produits/modif-produits/modif-produits.component";
import {ReqProdComponent} from "./components/req-prod/req-prod.component";
import {RequeteRisqueComponent} from "./components/requete-risque/requete-risque.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {NewReqProdComponent} from "./new-req-prod/new-req-prod.component";
import {AuthorizationGuard} from "./guards/authorization.guard";
import {NoAuthorizedComponent} from "./components/no-authorized/no-authorized.component";
import {TemplateComponent} from "./components/template/template.component";
import {PermissionComponent} from "./permission/permission.component";
import {AddTemplateComponent} from "./components/add-template/add-template.component";
import {EditRequeteComponent} from "./components/edit-requete/edit-requete.component";
import {EditUserComponent} from "./components/edit-user/edit-user.component";
import {ProfilComponent} from "./components/profil/profil.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'notification', component: NotificationsComponent},
  {path: 'profil',component:ProfilComponent},
  { path: 'edit-requete/:id', component: EditRequeteComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path:'admin', component: AdminComponent},
  { path:'requetes',component:RequeteRisqueComponent},
  { path:'req-prod', component:ReqProdComponent},
  { path: 'new-req-prod', component: NewReqProdComponent},
  { path: 'noAuthorized', component: NoAuthorizedComponent },
  { path: 'utilisateur', component: UtilisateursComponent, canActivate: [AuthorizationGuard] },
  { path: 'template', component: TemplateComponent},
  {path: 'NewTemplate',component: AddTemplateComponent},
  { path: 'permission', component: PermissionComponent},
  { path: 'produits', component: ProduitsComponent,
    children: [
      { path: 'listProduits', component: ListproduitsComponent },
      { path: 'AddProduits', component: AddProduitComponent },
      { path: 'modifProduits', component: ModifProduitsComponent },
      { path: 'CodeReleve', component: CodeReleveComponent}
    ]
  },
  { path: 'activites', component: ActivitesComponent,
    children: [
      { path: 'AddActivite', component: AddActiviteComponent },
      { path: 'ActDomaine', component: ActDomaineComponent}
    ]
  },
  {path: 'aiquery', component: AIQueryComponent},
  { path: 'coupleActiviteProduit', component: ActiviteProduitComponent},
  { path: 'codeFournisseur', component: CodeFournisseurComponent },
  { path: 'HabiliterUtilisateur', component: HabiliterUtilisateurComponent },
  { path: 'habilitation', component: HabilitationComponent},
  { path: 'historique', component: HistoriqueComponent,canActivate: [AuthorizationGuard]},

  { path: 'addutilisateur', component: AddUtilisateurComponent },
  { path: 'Référentiel', component: ReferencielComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
