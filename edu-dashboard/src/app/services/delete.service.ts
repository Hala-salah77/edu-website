import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {
  baseURL="http://edu-up.com/public/api/";

  constructor(public _HttpClient:HttpClient) { }

  deleteTeacher(data:any):Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'teacher/delete-teacher/'+data);
  }

  deleteStudentFromTeacher():Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'teacher/delete-teacher');
  }

  deleteExam(data:any):Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'exam/delete-exam/'+data);
  }

  deleteQuestion(data:any):Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'question/delete-question/'+data);
  }
  deleteGroup(data:any):Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'admin/delete-group/'+data);
  }
  deleteStudentToTeacher(data:any):Observable<any>
  {  
    return this._HttpClient.post(this.baseURL+'admin/deleteStudentFromTeacher',data);
  }
}
