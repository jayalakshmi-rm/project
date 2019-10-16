import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserServiceService } from '../user-service.service';
import {SharedeventService } from '../sharedevent.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
user:User;
username:string;
  test="you are logged in successfully";
  constructor(private _userService:UserServiceService, private _sharedEvent:SharedeventService ) { 
    this.user=new User();
  
    this._sharedEvent.userData.subscribe(
      (data) => {
        //console.log(data);
        this.user = data;
        this.username=data;
      });
  }
 
  ngOnInit() {
    //let temp:User={
     // username:this.user.username,
     // email:this.user.email,
    //  date:this.user.date,
     // phoneno:this.user.phoneno,
     //password:this.user.password
    //}
   // this.user=this._userService.getUserList();
  }
  
}
