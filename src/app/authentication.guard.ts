import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthguardService} from "./authguard.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private authGuardService: AuthguardService,
    private router: Router
  ) {
  }
  canActivate(): boolean  {
    if (!this.authGuardService.getUser()){
      this.router.navigateByUrl("/login");
    }
    return this.authGuardService.getUser();
  }

}
