import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserServiceService} from '../../services/user/user-service.service';
import {Router,Route} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user:User;
 users:User[];
 
  
  constructor(private _router:Router,private  _userService:UserServiceService ) { 
    this.user=new User();
    this.users=[];
    
  }

  ngOnInit() {
    
  }
  addUser(){
    let userTemp:User={
      
      username:this.user.username,
    email:this.user.email,
    phoneno:this.user.phoneno,
    password:this.user.password
    }
    this._userService.setUserObj(userTemp);
    this.user=this._userService.getUserList();
    console.log(this._userService.getUserList());
    this._router.navigate(['/dashboard']);
  //this._sharedEvent. userData.emit(this.user);
  
   
   
   //console.log(f);
    
  }

}
