import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { User } from 'src/app/model/user';

  @Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
  })
  export class DashboardComponent implements OnInit {
 user:User;
 
    constructor(public _userService:UserServiceService) {
      this.user=new User();
     
    }
     
  ngOnInit(){
   
    this.user=this._userService.getUserList();
  }
  
  }
  
