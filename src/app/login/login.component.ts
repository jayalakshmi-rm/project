import { Component, OnInit ,EventEmitter} from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';
import {UserServiceService} from '../user-service.service';
import {SharedeventService} from '../sharedevent.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user:User;



  
  constructor(private _userService:UserServiceService,private _sharedEvent:SharedeventService,private _router:Router) { 
    this.user=new User();
    
    
    
  }
  

  ngOnInit() {
      this._userService.getUserList();
  }

addUser(){
  this._userService.setUserObj(this.user);
  this._sharedEvent.userData.emit(this.user);
  this._sharedEvent.userData.emit(this.user.username);
    if(this.user.username == 'user' && this.user.password == 'user1'){
     this._router.navigate(["dashboard"]);
    }else {
      alert("Invalid credentials");
    }
  }
    
    //this._sharedEvent. userData.emit("onEvent: " + this.users);
 // this._router.navigate(['/dashboard']);
}

