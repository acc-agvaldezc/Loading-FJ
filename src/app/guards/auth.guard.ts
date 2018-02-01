import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TOKEN_NAME } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _router: Router) {}

  canActivate() {
    if (localStorage.getItem(TOKEN_NAME)) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this._router.navigate(['/login']);
    return false;
  }
}
