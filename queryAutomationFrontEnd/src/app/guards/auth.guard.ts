// auth.guard.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  MaybeAsync,
  GuardResult
} from '@angular/router';
import { UserService } from '../services/user.service';
import {AppStateService} from "../services/app-state.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private appState: AppStateService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.appState.authState.isAuthenticated) {
      return true;
    } else {
      this.router.navigateByUrl("/login")
      return false;
    }
  }
}
