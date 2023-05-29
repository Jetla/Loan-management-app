import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loan } from './loan';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 // constructor(private http:HttpClient) { }
 // createUser(user:User):Observable<any>
  //{
   // return this.http.post<any>("localhost:8080/customer/addCustomer",user);
  //}
  private baseUrl= "http://localhost:8080" ;
  data:any=[];
   constructor(private http: HttpClient) { } 
    createUser(user: User): Observable<any> { 
         return this.http.post(`${this.baseUrl}/customer/addCustomer`, user,{responseType:'text'}); 
       } 
       loginUser(email: String,password:String): Observable<any>
        {   
           return this.http.post(`${this.baseUrl}/customer/login?email=${email}&password=${password}`,{responseType:'text'}); 
       }
      addLoan(loan:Loan):Observable<any>
      {
        const httpOptions={
          Headers:new HttpHeaders({
            'Content-Type':'application/json'
          })
        };
        return this.http.post(`${this.baseUrl}/loan/applyLoan`, loan);//{responseType:'text'});
      }
    //  getLoans()
     // {
      //  return this.http.get(`${this.baseUrl}/loan`);
      //}
      modifyLoan(loan:Loan)
      {
        return this.http.put(`${this.baseUrl}/loan`, loan,{responseType:'text'}); 
      }
      searchLoan(id:number): Observable<any>
        {   
           return this.http.get(`${this.baseUrl}/loan/customer/${id}`,{responseType:'text'}); 
       }
}
