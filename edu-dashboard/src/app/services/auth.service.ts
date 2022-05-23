import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

 baseURL="http://edu-up.com/public/api/";

  constructor(private _HttpClient:HttpClient) { }
   studentSignUp(data:any):Observable<any>
  {  
    return this._HttpClient.post(this.baseURL+'student/register',data);
  } 

  studentSignOut(data:any):Observable<any>{  
    return this._HttpClient.post(this.baseURL+'signout',data);
  } 
  addGroupForTeacher(data:any):Observable<any>{  
    return this._HttpClient.post(this.baseURL+'admin/AddGroupForTeacher',data);
  }
  
  getAllGroupsInGrade(data:any):Observable<any>{  
    return this._HttpClient.post(this.baseURL+'admin/getAllGroupsINgrade',data);
  }

   teacherSignUp(data:any):Observable<any>{  
    return this._HttpClient.post(this.baseURL+'teacher/register' ,data);
  } 
  
  teacherSignIn(data:any):Observable<any>{  
    return  this._HttpClient.post(this.baseURL+'teacher/login',data);
  } 
  adminlogin(data:any):Observable<any>{  
    return  this._HttpClient.post(this.baseURL+'admin/login',data);
  } 
  adminSignUp(data:any):Observable<any> {  
    return  this._HttpClient.post(this.baseURL+'admin/register',data);
  } 

   examSignup(data:any):Observable<any>{   
    return this._HttpClient.post(this.baseURL+'admin/save-exam' ,data );
  }  
  questionSignup(data:any):Observable<any>{  
    return this._HttpClient.post(this.baseURL+'question/save-question',data);
  }  
  addStudent(data:any):Observable<any>{  
    return this._HttpClient.post(this.baseURL+'teacher/add-student',data);
  }  
  teacherSignOut(data:any):Observable<any>{   
    return this._HttpClient.post(this.baseURL+'signout' ,data );
  }  
  getResaultExamsByTeacher(data:any):Observable<any>{   
    return this._HttpClient.post(this.baseURL+'admin/getResaultExamsByTeacher' ,data );
  } 

 getAllTeachersForStudent(data:any):Observable<any>{   
  return this._HttpClient.post(this.baseURL+'admin/getAllTeachersForStudent',data );
}
AddStudentToTeacherr(data:any):Observable<any>{   
  return this._HttpClient.post(this.baseURL+'admin/add-student',data );
}
searchBox(data:any):Observable<any>{   
  return this._HttpClient.post(this.baseURL+'/exam/getListOfStudentsInExam',data );
} 
  isLoggedIn(){
     return !!localStorage.getItem('api_token');
  }

}
