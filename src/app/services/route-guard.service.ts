import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
@Injectable()

export class RouteGuardService implements CanActivate{

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let name = route.url[1].path;

    if(name != 'American' && name != 'Italian' && name != 'Mexican' && name != 'Japanese' && name != 'Korean') {
      alert("Invalid Journey!");
      this._router.navigate(['/journeys']);
      return false;
    }
    return true;
  }
}