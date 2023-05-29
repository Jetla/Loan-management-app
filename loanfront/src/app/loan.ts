

import { User } from "./user";


export class Loan {
    loanId!:number;
   loanAmt!:number;
    loanType:String="";
    duration!:number;
    monthlyEMI!:number;
    customer!:User;
}
