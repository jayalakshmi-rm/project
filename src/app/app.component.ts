import { Component, OnInit} from '@angular/core';
import { SharedeventService } from './services/shared/sharedevent.service';
import { User } from './model/user';
import { Observable } from 'rxjs';
import { AuthService } from './services/authService';
import { SearchPipe} from '../app/search.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  searchText:string;
username:string;
 handleLink:boolean=false;
  constructor(private authService: AuthService,private  sharedEvent:SharedeventService) {
    this.sharedEvent.userData.subscribe(
      (data) => {
        this.handleLink = data;
      }
    );
  }  
                    
  isLoggedIn$: Observable<boolean>;
   
    ngOnInit() {
      this.isLoggedIn$ = this.authService.isLoggedIn;
    }
  
    logout(){
      this.authService.logout();                     
    }
  }



