import { Component, OnInit } from '@angular/core';
import { ProductDetailsModel } from '../../model/product-details.model';
import { ConstantData } from '../../utils/constants';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  imagePath;
  productDetails: ProductDetailsModel;
  productSizes = ConstantData.productSizes;
  productList;

  constructor() { }

  ngOnInit() {    
    this.productDetails = new ProductDetailsModel();
    this.productDetails.productImagePath = '/assets/products/product_2.jpg';
    this.productDetails.productDescription = 'Overall Lace Split Sheer Top & Pants Set Overall Lace Split Sheer Top & Pants Set Overall Lace Split Sheer Top & Pants Set Overall Lace Split Sheer Top & Pants Set Overall Lace Split Sheer Top & Pants Set Overall Lace Split Sheer Top & Pants Set Overall Lace Split Sheer Top & Pants Set Overall Lace Split Sheer Top & Pants Set Overall Lace Split Sheer Top & Pants Set ';
    this.productDetails.productName = 'Overall Lace Split Sheer Top & Pants Set';
    this.productDetails.productSizes = ['M', 'L'];
    this.productList = [{
      productName: 'Name',
      productImagePath: '/assets/products/product_2.jpg'
    },
    {
      productName: 'Name',
      productImagePath: '/assets/products/product_2.jpg'
    },
    {
      productName: 'Name',
      productImagePath: '/assets/products/product_2.jpg'
    }];
  }

}
