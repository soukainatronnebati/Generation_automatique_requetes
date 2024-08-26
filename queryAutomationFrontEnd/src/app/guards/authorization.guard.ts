import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot
} from '@angular/router';
import {Injectable} from "@angular/core";
import {AppStateService} from "../services/app-state.service";
import {UserService} from "../services/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard  implements CanActivate {
  constructor(private appState: AppStateService, private router: Router, private userService: UserService) {
    this.userService.setAuthStateFromToken();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('Guard: Checking authorization', this.appState.authState);

    if (this.appState.authState.isAuthenticated) {
      if (this.userService.getUserRole() == 'ADMIN') {
        return true;
      } else {
        console.log('Guard: User authenticated but not an admin');
        this.router.navigateByUrl('noAuthorized');
        return false;
      }
    } else {
      console.log('Guard: User not authenticated');
      this.router.navigateByUrl('noAuthorized');
      return false;
    }
  }
}
