import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-teacher-long-in',
  templateUrl: './teacher-long-in.component.html',
  styleUrls: ['./teacher-long-in.component.css']
})
export class TeacherLongInComponent implements OnInit {
public name:any;
public teacherId:any;
public nOfExams:any;
  constructor(private _AuthService:AuthService, public _Router:Router) { 
    if(this._AuthService.isLoggedIn()){
      this._Router.navigate(['./studentTeachers']);
    }
  } 
  teacherSignIn=new FormGroup({ 
    name:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  });
  FormData(){
    console.log(this.teacherSignIn.value); 
   this. _AuthService.teacherSignIn(this.teacherSignIn.value).subscribe(response=>{

    if(response.msg=="Teacher login successfully"){
     console.log(response)
    this.teacherId=response.data.id
      this._Router.navigate(['./teacherStudents/'+this.teacherId])
      localStorage.setItem('api_token',response.data.api_token);
     this.name= localStorage.setItem('name',response.data.name);
     this.teacherId= localStorage.setItem('teacherId',response.data.id);
     this.nOfExams= localStorage.setItem('nOfExams',response.data.no_exams);
    }
  }) 

  
 } 
  ngOnInit(): void {
  }

}
