import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloandetailsComponent } from './adminloandetails/adminloandetails.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home/home.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { LoginComponent } from './login/login.component';
import { ModifyloanComponent } from './modifyloan/modifyloan.component';
import { UserComponent } from './user/user.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'user',component:UserComponent},
  {path:'loanDetails',component:LoanDetailsComponent},
  {path:'admin',component:AdminComponent},
  {path:'addloan',component:AddLoanComponent},
  {path:'adminLoanDetails',component:AdminloandetailsComponent},
  {path:'create',component:CreateUserComponent},
  {path:'modify',component:ModifyloanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
