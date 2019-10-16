import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouteServiceService} from '../app/route-service.service';
import {UserServiceService} from '../app/user-service.service';
import { SharedeventService } from '../app/sharedevent.service';
import { CamelcasePipe } from './camelcase.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SignupComponent,
    LoginComponent,
    CamelcasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [UserServiceService,RouteServiceService, SharedeventService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
