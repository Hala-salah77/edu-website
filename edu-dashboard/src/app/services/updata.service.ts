import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdataService {
  baseURL="http://edu-up.com/public/api/";

  constructor(public _HttpClient:HttpClient) {}


  updateTeacher(data:any):Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'teacher/update-teacher/'+data);
  }
  updateStudent(data:any):Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'student/update-student/'+data);
  }
  updateExam(data:any):Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'exam/update-exam/'+data);
  }
  updateQuestion(data:any):Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'question/update-question/'+data);
  }
}
