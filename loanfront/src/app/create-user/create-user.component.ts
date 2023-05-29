import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
user:User=new User();
 createForm!: FormGroup;

  ngOnInit()
  {
    this.createForm=new FormGroup({
      firstName:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      lastName:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      gender:new FormControl("",[Validators.required]),
      phone:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(11)]),
      email:new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required]),
      confirmPassword:new FormControl("",[Validators.required]),
      salary:new FormControl("",[Validators.required]),
      adhaar:new FormControl("",[Validators.required,Validators.minLength(12),Validators.maxLength(12)]),
      pan:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),

     }
     //,
      //{
       // validators: ConfirmPasswordValidator("password", "confirmPassword")
      //}
      );
  }
constructor(private service:UserServiceService,private _router:Router){}
saveUser()
{
  this.service.createUser(this.user).subscribe(data=>{console.log(data)},
  error=>console.log(error));
  alert("Registration successfully completed");
  this._router.navigate(['home'])
}
onSubmit()
{
 // console.log(this.user);
  //this.saveUser();
  if(this.createForm.valid){
    this.saveUser();
  }
}
}
//function ConfirmPasswordValidator(arg0: string, arg1: string): import("@angular/forms").ValidatorFn | import("@angular/forms").ValidatorFn[] | null | undefined {
 // throw new Error('Function not implemented.');
//}


