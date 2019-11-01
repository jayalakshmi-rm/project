import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstantData } from 'src/app/utils/constants';
import { ProductDetailsModel } from 'src/app/model/product-details.model';
import {AddProductComponent} from '../add-product/add-product.component';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  product: ProductDetailsModel = new ProductDetailsModel();
  productName;
  imagePath;
  productDetails;
  productSizes = ConstantData.productSizes;
  productList;
  productID;
  noDetailsToDisplay;
  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpServiceService,private _router:Router) {
    this.product = new ProductDetailsModel();
    this.product.productSizes=[];
   }

  ngOnInit() {
    this.productID = this.activatedRoute.snapshot.params['productID'];
     if(this.productID){
    this.httpService.getService('product/productdetails/' + this.productID).subscribe(
      (res) => {
        this.product = res['product'];
      },
      (err) => {
        console.log('error in loading details', err);
        this.noDetailsToDisplay = 'Error in loading details' + err['error'];
      }
    );
     }
  }
 submit(){
    let temp={
      productName: this.product.productName,
    productID: this.product.productID,
    productPrice:this.product.productPrice,
    availableQuality: this.product.availableQuality,
    productStatus: this.product.productStatus,
    productDescription: this.product.productDescription,
    productSizes: this.product.productSizes,
    productImagePath: this.product.productImagePath,
    prodcutCategory: this.product.productCategory
    }
  
    this.productID = this.activatedRoute.snapshot.params['productID'];

    this.httpService.postService('product/editproduct/' + this.productID,temp).subscribe(
      (res) => {
        //this.productDetails=productDetails;
       this.productDetails = res['product'];
        console.log(res);
        this._router.navigate(['/productlist']);
      },
      (err) => {
        console.log('error in loading details', err);
        this.noDetailsToDisplay = 'Error in loading details' + err['error'];
      }
    );



  }

}
