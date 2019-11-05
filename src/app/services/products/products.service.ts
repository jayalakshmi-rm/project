import { Injectable } from '@angular/core';
import {User} from '../../model/user';
import { ProductDetailsModel } from 'src/app/model/product-details.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService{ 
productDetails:ProductDetailsModel;

  constructor() {
    this.productDetails=new ProductDetailsModel(); 
   }
   getProducts():ProductDetailsModel{
    return this.productDetails;
  }
 setProducts(productDetails) {
   console.log('set',productDetails);
    this.productDetails = productDetails;
}
 
}
