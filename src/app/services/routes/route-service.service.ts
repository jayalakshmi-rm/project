import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ProductDetailsComponent } from 'src/app/components/product-details/product-details.component';
import { HttpServiceService } from '../http-service/http-service.service';

@Injectable()
export class  RouteServiceService  implements CanActivate {
product:ProductDetailsComponent
  

  constructor(private httpservice:HttpServiceService, private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let temp=this.httpservice.getService('product/productlist');
  
    this._router.navigate(['/productdetails']);
   return false

  }

}
