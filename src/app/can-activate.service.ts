import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService {

  constructor(private ser: ServiceService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    //check some condition  
    if (this.ser.getToken() == null) {
      alert('You are not allowed to view this page.');
      
      this.router.navigate([""]);
      return false;

      //var urlTree = this.router.createUrlTree(['login']);
      //return urlTree;
  } 
    return true;
  }

}
