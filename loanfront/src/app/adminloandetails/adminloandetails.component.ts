import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from '../loan';

@Component({
  selector: 'app-adminloandetails',
  templateUrl: './adminloandetails.component.html',
  styleUrls: ['./adminloandetails.component.css']
})
export class AdminloandetailsComponent implements OnInit{
  LoanArray:any;
constructor(private http:HttpClient,private _router:Router){}
ngOnInit(): void {
  let response=this.http.get("http://localhost:8080/loan");
  response.subscribe((data)=>

  this.LoanArray=data,
// this._id=this.LoanArray.get['loanId']
 );
}
onDelete()
{
  let id = prompt("Please enter Loan Id", "");
  let res=this.http.delete(`http://localhost:8080/loan/foreclose/${id}`);
res.subscribe((data)=>
console.log(data));
this._router.navigate(['adminLoanDetails']);
window.location.reload();
//}
//else{
 // window.alert("this loan Id is not present");
//}
}

 }


