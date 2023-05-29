import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { AdminComponent } from './admin/admin.component';

import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  
  {path:'admin',component:AdminComponent},
  {path:'addloan',component:AddLoanComponent},
  
  {path:'create',component:CreateUserComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
