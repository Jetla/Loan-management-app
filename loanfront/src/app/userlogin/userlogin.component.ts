import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  user:User=new User()
  registerForm:any = FormGroup;
  submitted = false;
  constructor( private formBuilder: FormBuilder,private router:Router,private service:UserServiceService){}
  //Add user form actions
  get f() { return this.registerForm.controls; }
  onSubmit() {
    
   // this.submitted = true;
   
    this.service.loginUser(this.user.email,this.user.password).subscribe(data=>{
      if(data!=null)
      {
        this.submitted=true;
        if(this.submitted)
        {
          alert("User Login successfully!!!");
          this.router.navigate(['user']);
        }
        console.log(data)
    }else{
      alert("Email Id and password was incorrect");
    }},
    error=>console.log(error));
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
  }
    //True if all the fields are filled
   
   
  }
    ngOnInit() {
      //Add User form validations
      this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
      });
    }
 
 // userLogin:any={
   // email:"",
    //password:""
 // }
//constructor(private service:UserServiceService,private _router:Router){}
 //loginUsers()
 //{
  //this.service.loginUser(this.user.email,this.user.password).subscribe(data=>{console.log(data)},
   // error=>console.log(error));
    //this._router.navigate(['user'])
  //}
 // loginUsers()
  //{
   //const isUserExist= this.user['find']((m: { email: any; password: any; })=>m.email==this.userLogin.email&&m.password==this.userLogin.password);
   //if(isUserExist!=undefined)
   //{
//alert("login successfully");
  // } 
   //else{
    //alert("wrong credintials");
  // }
  //}
 // onLogin()
  //{
   // console.log(this.user);
   // this.loginUsers();
  //}
}
