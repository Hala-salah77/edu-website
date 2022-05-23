import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllService {
  baseURL="http://edu-up.com/public/api/";

  constructor(public _HttpClient:HttpClient) { }

 
   getAllTeachers():Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'admin/get-all-teachers');
  }

  getAllQuestions():Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'admin/getAllQuestions');
    
  }
  getAllStudents():Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'admin/get-all-students');
    
  }
  getAllEXAMS():Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'admin/get-all-exams');
    
  }
  getAllGrades():Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'admin/get-all-grades');
    
  }
  getAllSubjects():Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'admin/get-all-subjects');
    
  }
  getAllGroups():Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'admin/get-all-groups');
  }
  
  getTeacherGroupsforAdmin(data:any):Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'admin/teacher-groups/'+data);
  }

  getAllQuestionBank():Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'admin/getAllQuestions');
  }

  showExamAndQuestion(data:any):Observable<any>
  {  
    return this._HttpClient.get(this.baseURL+'exam/showExamAndQuestion/'+data);
  }
  getListOfStudentsInExam(data:any):Observable<any>
  {  
    return this._HttpClient.post(this.baseURL+'exam/getListOfStudentsInExam/',data);
  }
}