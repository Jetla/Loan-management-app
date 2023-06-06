import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loan } from '../loan';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent {
  addForm!: FormGroup
  submitted=false;
//loan:Loan=new Loan()
 // constructor(private service:UserServiceService,private _router:Router){}
 constructor(private issueService:UserServiceService,private fb:FormBuilder,private router:Router,private http:HttpClient)
 {
  this.addForm=this.fb.group({
    loanAmt:this.fb.control("",Validators.required),
    loanType:this.fb.control("",Validators.required),
    duration:this.fb.control("",Validators.required),
    monthlyEMI:this.fb.control("",Validators.required),
    id:this.fb.control("",Validators.required)
  })
 }
onSubmit()
{
  const loan=new Loan();
  loan.customer=new User();
  loan.loanAmt=this.addForm.controls['loanAmt'].value;
  loan.loanType=this.addForm.controls['loanType'].value;
  loan.duration=this.addForm.controls['duration'].value;
  loan.monthlyEMI=this.addForm.controls['monthlyEMI'].value;
  loan.customer.id=this.addForm.controls['id'].value;
  console.log(loan);
  
  this.issueService.addLoan(loan).subscribe((data:any)=>{ this.submitted = true;
    console.log()   },
  error=>console.log(error));
  if (this.submitted){

  
  alert("added loan details successfuly");
  this.router.navigate(['loanDetails']);
}
}
ngOnInit():void{

}
//onSubmit()
//{
 // console.log(this.loan);
 //let res= this.http.post(`http://localhost:8080/loan/applyLoan`, this.loan,{responseType:'text'});
 // this.issueService.addLoan(this.addForm.value).subscribe(data=>{
 // console.log(res);
 //res.subscribe(data=>{  
 //console.log(data);
  //  window.alert("added loan");
  //},
  //)
//}
}
