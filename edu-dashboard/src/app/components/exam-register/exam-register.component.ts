import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GetAllService } from 'src/app/services/get-all.service';
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-exam-register',
  templateUrl: './exam-register.component.html',
  styleUrls: ['./exam-register.component.css']
})
export class ExamRegisterComponent implements OnInit {
  teachers: any[] = [];
  subjects: any[] =[];
  grades: any[] =[];
  groups: any[] =[];
  public examId:any;
  constructor(private _AuthService:AuthService, public _GetAllService:GetAllService, public _Router:Router) { 
    this._GetAllService.getAllTeachers().subscribe((data)=>{
      this.teachers=data.data;
      console.log(data.data)
       }
       ,(err)=>{console.log(err)
       })  


    this._GetAllService.getAllSubjects().subscribe((data)=>{
      this.subjects=data.data;
      console.log(data.data)
       }
       ,(err)=>{console.log(err)
       })  

       this._GetAllService.getAllGrades().subscribe((data)=>{
        this.grades=data.data;
        console.log(data.data)
         }
         ,(err)=>{console.log(err)
         })  

       this._GetAllService.getAllGroups().subscribe((data)=>{
        this.groups=data.data;
        console.log(data)
         }
         ,(err)=>{console.log(err)
         })  
  
  } 
  examRegister=new FormGroup({ 
    exam_title:new FormControl('',Validators.required),
    teacher_id:new FormControl('',Validators.required),
    grade_id:new FormControl('',Validators.required),
    full_time:new FormControl('',Validators.required),
    group_id:new FormControl('',Validators.required),
    subject_id:new FormControl('',Validators.required),
    end_time:new FormControl('',Validators.required),
    start_time:new FormControl('',Validators.required)
  });

  FormData(){
     console.log(this.examRegister.value); 
   this. _AuthService.examSignup( this.examRegister.value).subscribe(response=>{
      console.log(response)
       this.examId=response.data.id;
     
   }) 
  } 


  ngOnInit(): void {
  }

}
