import { Component, OnInit ,EventEmitter} from '@angular/core';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import {UserServiceService} from '../../services/user/user-service.service';
import { SharedeventService } from 'src/app/services/shared/sharedevent.service';
import { AuthService } from 'src/app/services/authService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user:User;



  
  constructor(private _userService:UserServiceService,private _router:Router,private sharedEvent:SharedeventService,private authservice:AuthService) { 
    this.user=new User();
    
    
    
  }
  

  ngOnInit() {
      
  }

addUser(){
    

    if(this.user.username == 'user' && this.user.password == 'user1'){
      this.authservice.login(this.user);
      this._userService.setUserObj(this.user);
      this.sharedEvent.userData.emit(true);
     this._router.navigate(["/productlist"]);

    }else {
      alert("Invalid credentials");
    }
  }
    
    
}

