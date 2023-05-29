import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


import { AdminComponent } from './admin/admin.component';
import { AddLoanComponent } from './add-loan/add-loan.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { CreateUserComponent } from './create-user/create-user.component';
import {FlexLayoutModule} from '@angular/flex-layout';

import { CommonModule } from '@angular/common';
import { UserServiceService } from './user-service.service';
import { HomepgComponent } from './homepg/homepg.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
   
    AdminComponent,
    AddLoanComponent,
    
    CreateUserComponent,
   
    HomepgComponent
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
