import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL="http://edu-up.com/public/api/";

  constructor(private _HttpClient:HttpClient) { }
  
  studentSignIn(data:any):Observable<any>{  
   return this._HttpClient.post(this.baseURL+'student/login' ,data );
 } 
 
 teacherSignIn(data:any):Observable<any>{  
   return  this._HttpClient.post(this.baseURL+'teacher/login',data);
 } 
 
 examSignup(data:any):Observable<any>{   
  return this._HttpClient.post(this.baseURL+'admin/save-exam' ,data );
}  
questionSignup(data:any):Observable<any>{  
  return this._HttpClient.post(this.baseURL+'question/save-question',data);
}  
answerExam(data:any):Observable<any>{  
  return this._HttpClient.post(this.baseURL+'exam/answerExam',data);
} 
savedAnswer(data:any):Observable<any>{  
  return this._HttpClient.post(this.baseURL+'answer/save-answer/',data);
}  
    
 isLoggedIn(){
    return !!localStorage.getItem('api_token')
 }
 
 getToken(){
   return localStorage.getItem('api_token');
 }
}
