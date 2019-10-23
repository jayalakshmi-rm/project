import { Injectable } from '@angular/core';
import {User} from '../../model/user';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
user:User;
private userList:User[];
  constructor() {
    this.userList=[];
    this.user=new User();
    
   }
   getUserList():User{
    return this.user;
  }
 setUserObj(user) {
   console.log('set', user);
    this.user = user;
}
 
}
