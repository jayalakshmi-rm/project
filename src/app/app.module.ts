import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { RouteServiceService} from './services/routes/route-service.service';
import {UserServiceService} from './services/user/user-service.service';
import { SharedeventService } from './services/shared/sharedevent.service';
import { AuthService } from './services/authService';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SignupComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [UserServiceService,RouteServiceService, SharedeventService ,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
