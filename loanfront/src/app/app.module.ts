import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { UserComponent } from './user/user.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { AdminComponent } from './admin/admin.component';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { AdminloandetailsComponent } from './adminloandetails/adminloandetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { CreateUserComponent } from './create-user/create-user.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ModifyloanComponent } from './modifyloan/modifyloan.component';
import { CommonModule } from '@angular/common';
import { UserServiceService } from './user-service.service';
import { UserloginComponent } from './userlogin/userlogin.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ApplyLoanComponent,
    UserComponent,
    LoanDetailsComponent,
    AdminComponent,
    AddLoanComponent,
    AdminloandetailsComponent,
    CreateUserComponent,
    ModifyloanComponent,
    UserloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
