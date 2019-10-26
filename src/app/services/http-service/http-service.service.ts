import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDetailsModel } from 'src/app/model/product-details.model';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  public getService(url) {
    return this.http.get('http://localhost:3000/' + url);
  }
 
  public postService(url,data:ProductDetailsModel){
    return this.http.post('http://localhost:3000/',data);
  }
}
