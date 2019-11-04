import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDetailsModel } from 'src/app/model/product-details.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  public getService(url):Observable<any>{
    return this.http.get('http://localhost:3000/' + url);
  }
 
  public postService(url,data:any){
    return this.http.post('http://localhost:3000/'+url,data);
  }
}
