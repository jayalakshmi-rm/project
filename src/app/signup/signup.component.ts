import { Component, OnInit ,AfterViewInit,EventEmitter} from '@angular/core';
import {User} from '../model/user';
import {UserServiceService} from '../user-service.service';
import {Router,Route} from '@angular/router';
import { SharedeventService } from '../sharedevent.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user:User;
 users:User[];
 _userService:UserServiceService;
  _sharedEvent: SharedeventService ;

  
  constructor(private _router:Router, _userService:UserServiceService,_sharedEvent:SharedeventService ) { 
    this.user=new User();
    this.users=[];
    
  }

  ngOnInit() {
    
  }
  addUser(){
    let userTemp:User={
      
      username:this.user.username,
    email:this.user.email,
    date:this.user.date,
    phoneno:this.user.phoneno,
    password:this.user.password
    }
    //this._userService.addUserToList(userTemp);
    this._userService.getUserList();
    this._userService.setUserObj(this.user);
    this._sharedEvent. userData.emit(this.user);
    this._router.navigate(['/dashboard']);
  //this._sharedEvent. userData.emit(this.user);
  
   
   // console.log(this._customerService.getCustomerList());
   //console.log(f);
    
  }

}
