import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private loginServ:LoginService) { }
  canActivate(): boolean  {
    return this.loginServ.isValid();
  }
}
