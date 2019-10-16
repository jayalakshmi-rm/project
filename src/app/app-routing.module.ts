import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouteServiceService} from './route-service.service';

const routes: Routes = [
  {path:'',component:HomeComponent,canActivate:[RouteServiceService ]},
  {path:'dashboard',component:DashboardComponent},
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{ path: '', redirectTo: 'home', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[ RouteServiceService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
