import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ConnectBeService } from 'src/app/connect-be.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _connectbe:ConnectBeService,private router: Router) { }
  
  canActivate():boolean{
    if(this._connectbe.loggedIn())
    {
      return true
    }
    else{
      this.router.navigate(['loginPatient'])
      return false
    }
  }
}
