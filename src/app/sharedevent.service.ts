import { Injectable,EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedeventService {
  


  constructor() { }
  userData=new EventEmitter<any>();
  
}

