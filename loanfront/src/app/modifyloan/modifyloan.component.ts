import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from '../loan';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-modifyloan',
  templateUrl: './modifyloan.component.html',
  styleUrls: ['./modifyloan.component.css']
})
export class ModifyloanComponent {
  loan:Loan=new Loan();
  constructor(private service:UserServiceService,private _router:Router){}
  editLoan()
  {
    this.service.modifyLoan(this.loan).subscribe((data: any)=>{console.log(data)},
    error=>console.log(error));
    alert("Edit Loan successfully completed");
   this._router.navigate(['adminLoanDetails']);
  }
  onSubmit()
  {
    console.log(this.loan);
    this.editLoan();
  }
}
