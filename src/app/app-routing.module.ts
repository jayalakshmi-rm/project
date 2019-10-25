import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import {LoginComponent} from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RouteServiceService} from './services/routes/route-service.service';
import { AuthGuard } from './services/authGuard';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'productdetails/:productID',component:ProductDetailsComponent},
{path:'addproductdetails',component:AddProductComponent},
{ path: '', redirectTo: 'home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[ RouteServiceService,AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
