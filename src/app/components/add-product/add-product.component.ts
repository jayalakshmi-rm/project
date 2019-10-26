import { Component, OnInit } from '@angular/core';
import { ProductDetailsModel } from '../../model/product-details.model';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product: ProductDetailsModel = new ProductDetailsModel();
  constructor(private _router:Router,private httpService:HttpServiceService) {
    this.product = new ProductDetailsModel();
   }

  ngOnInit() {
  }

  addProduct() {
    let temp={
      productName: this.product.productName,
    productID: this.product.productID,
    productPrice:this.product.productPrice,
    availableQuality: this.product.availableQuality,
    productStatus: this.product.productStatus,
    productDescription: this.product.productDescription,
    productSizes: this.product.productSizes,
    productImagePath: this.product.productImagePath,
    prodcutCategory: this.product.prodcutCategory
    }
    this.httpService.postService('product/addproduct/',temp).subscribe(
      (res) => {
        //this.product = res;
        console.log(res);
        this._router.navigate(["/productlist"]);
       
      },
      (err) => {
        console.log('error in loading details', err);
      }
    );

  
  }

}
