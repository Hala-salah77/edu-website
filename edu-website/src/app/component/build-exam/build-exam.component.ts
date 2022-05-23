import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-build-exam',
  templateUrl: './build-exam.component.html',
  styleUrls: ['./build-exam.component.css']
})
export class BuildExamComponent implements OnInit {
  grades: any[] =[];
  groups: any[] =[];
   teacherId=localStorage.getItem("teacherId")
  public subjectId:any;
  public examId:any;
  constructor(private _AuthService:AuthService, public _GetAllService:GetAllService, public _Router:Router) { 

/* ################# Get All Grades ########################*/
    this._GetAllService.getAllGrades().subscribe((data)=>{
     
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
/* ################# Get All Groups ########################*/
    this. _GetAllService.GetGroupsOfTeachers(this.teacherId).subscribe((res)=>{
      this.groups=res.teacher_groups; 
        console.log(res)
         }
         ,(err)=>{console.log(err)
         })  
  }

}
