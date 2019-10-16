import { Injectable } from '@angular/core';
import {User} from '../app/model/user';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
private userList:User;
private userar:User[];
  constructor() {
    this.userList=new User();
    this.userar=[];
   }
   getUserList():User{
    return this.userList;
  }
  setUserObj(data) {
    console.log('set', data);
    this.userList = data;
}
 // addUserToList(userObject:User[]){
  // this.userList.push(userObject);
//}
}
