import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from '../loan';
import { UserServiceService } from '../user-service.service';
import { UserComponent } from '../user/user.component';
import { UserloginComponent } from '../userlogin/userlogin.component';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent {
  LoanArray:any;
  dataArray:any;
  id!:number;
  constructor(private http:HttpClient,private service:UserServiceService,private _router:Router){}
  ngOnInit(): void {
     this.id = parseInt(this.service.data)
     console.log(this.id)
     let response=this.http.get(`http://localhost:8080/loan/customer/${this.id}`,{responseType:'text'});
    response.subscribe((data:any)=>{
    this.LoanArray=JSON.parse(data)
   // this.LoanArray.reset()

  },
     error=>{
     if(this.LoanArray==undefined)
     {console.log(error)
      alert("wrong customer ID");
     }
    }
  
    );

   // let response=this.http.get("http://localhost:8080/loan");
    //response.subscribe((data)=>
    //this.LoanArray=data);
    
  }
  searchLoans()
  {
   //this.service.searchLoan(this.loan.id).subscribe(data=>{console.log(data)},
    // error=>console.log(error));
    // this._router.navigate(['loanDetails']);
   console.log(this.service.data)
    let response=this.http.get(`http://localhost:8080/loan/customer/${this.id}`,{responseType:'text'});
    response.subscribe((data:any)=>{
    this.LoanArray=JSON.parse(data)
   // this.LoanArray.reset()

  },
     error=>{
     if(this.LoanArray==undefined)
     {console.log(error)
      alert("wrong customer ID");
     }
    }
  
    );
    console.log(this.LoanArray)
  
   }
   onSearch()
   {
    // console.log(this.loan);
  
     this.searchLoans();
     this.LoanArray=this.dataArray;
   }
}
