import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/model/product';
import { HttpServiceService } from '../../services/http-service/http-service.service'; 

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  products:any;//ProjectModel[]
  constructor(private httpService:HttpServiceService) { 
    this.products=[];
  }

  ngOnInit() {


    this.httpService.getService('product/productlist').subscribe(
      (res) => {
        
        this.products = res['productList'];
      },
      (err) => {
        console.log('error in loading details', err);
        
      }
    );





















    this.products= [{
      productID:'1000',
       productName: 'product1',
       productImagePath: '/assets/products/product_1.jpg'
     },
     {
       productID:'1001',
       productName: 'product2',
       productImagePath: '/assets/products/product_2.jpg'
     },
     {
       productID:'1002',
       productName: 'product3',
       productImagePath: '/assets/products/product_3.jpg'
     },
     {
       productID:'1003',
       productName: 'product4',
       productImagePath: '/assets/products/product_4.jpg'
     }];

  }

}
