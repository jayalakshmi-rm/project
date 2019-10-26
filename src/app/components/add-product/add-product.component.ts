import { Component, OnInit } from '@angular/core';
import { ProductDetailsModel } from '../../model/product-details.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product: ProductDetailsModel = new ProductDetailsModel();
  constructor(private _router:Router) { }

  ngOnInit() {
  }

  addProduct() {
    this.product = new ProductDetailsModel();
    this._router.navigate(["/productlist"]);

  }

}
