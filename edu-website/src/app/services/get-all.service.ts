import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {timeout} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})


export class GetAllService {
res:any
  baseURL="http://edu-up.com/public/api/";

  constructor(public _HttpClient:HttpClient) { }

  getDataOfstudents(data:any):Observable<any>{
   return this._HttpClient.post(this.baseURL+'student/login',data)
  }  

  getAllGrades():Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'teacher/getAllGradesForTechaer');
  }

  getAllGroups(data:any):Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'teacher/getAllGroupsForTechaer/'+data);
  }
  getStudents(data:any):Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'teacher-student/'+data);
  }
  showExamAndQuestion(data:any):Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'exam/showExamAndQuestion/'+data);
  }
  getMyTeachers():Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'student/getMyTeachers');
  }
  getExam(data:any):Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'exam/show-exam/'+data);
  }
  getNotifications(data:any):Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'student/getNewNotifications/'+data).pipe(timeout(1000))

  }
  getHistoryexam(data:any):Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'getHistoryExam/'+data);
  }
  GetGroupsOfTeachers(data:any):Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'teacher-groups/'+data);
  }

}
