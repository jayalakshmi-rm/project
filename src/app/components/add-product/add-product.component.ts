import { Component, OnInit, Input } from '@angular/core';
import { ProductDetailsModel } from '../../model/product-details.model';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { ConstantData } from '../../utils/constants';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  @Input()product: ProductDetailsModel = new ProductDetailsModel();
  productSizes=ConstantData.productSizes;
  constructor(private _router:Router,private httpService:HttpServiceService) {
    this.product = new ProductDetailsModel();
    this.product.productSizes=[];
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
      productCategory: this.product.productCategory
  }
    
       this.httpService.postService('product/addproduct',temp).subscribe(
         (res)=>{
          
         console.log(res);
        this._router.navigate(['/productlist']);
       
      },
      (err) => {
        console.log('error in loading details', err);
      }
    );

  
  }
  
}
