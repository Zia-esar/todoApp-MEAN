import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable()
export class AuthGuardService implements CanActivate {

  isResult;

  constructor(private _router: Router) {}

  canActivate(): boolean {
    let result = localStorage.getItem('user');
      if(result !== null){
        this.isResult = true;
      }else {
        this.isResult = false;
        this._router.navigateByUrl('login');
      }

    return this.isResult;
  }
}
