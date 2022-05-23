import { Component, OnInit } from '@angular/core';
import { GetAllService } from 'src/app/services/get-all.service';
import { CommonModule } from "@angular/common";
import {FormGroup, FormControl, Validators ,FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { DeleteService } from 'src/app/services/delete.service';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


declare var $: any;
@Component({
  selector: 'app-all-teachers',
  templateUrl: './all-teachers.component.html',
  styleUrls: ['./all-teachers.component.css']
})

export class AllTeachersComponent implements OnInit {
  teachers:any[] =[];
  public teacherId:any;
  
   constructor(
     public _GetAllService:GetAllService,
     public _Router:Router,
     public _delete:DeleteService,
     public _http:HttpClient) { 

    // ##################### Get All teachers ########################
     _GetAllService.getAllTeachers().subscribe((data)=>{
      this.teachers=data.data ;
     console.log(data.data);
     }
     ,(err)=>{console.log(err)}) 
  } 

  
 // ##################### bring id from fun getID  #####################

  teacher_id:any;
  getId(id:any){
    this.teacher_id=id;
    console.log(id);
  }
// ##################### delete teacher ########################

 deleteTeacher(){
    let data={
      Id:this.teacher_id
    }
    this._delete.deleteTeacher(this.teacher_id).subscribe(res=>{
      console.log(res);
      if(res.msg=="teacher has been deleted successfully"){
        $("#deleteExam").modal('hide');
      }
    })
  } 


   // ######################## edit ########################
  setvalue(){
    for (let index=0; index< this.teachers.length;index++){
      if(this.teachers[index].id==this.teacher_id){
        console.log(this.teachers[index])
      }
    }
  }


  teacherSignUp=new FormGroup({ 
    name:new FormControl('',Validators.required),
   password:new FormControl('',Validators.required),
   phone:new FormControl('',Validators.required),
    subject_name:new FormControl('',Validators.required),
    no_exams:new FormControl('',Validators.required),
    image:new FormControl(),
    email:new FormControl()
    
  });
  /* FormData(){
     console.log(this.teacherSignUp.value); 
   this._AuthService.teacherSignUp(this.teacherSignUp.value).subscribe(response=>{
     console.log(response);
   }) 
  }  */
  ngOnInit(): void {
  }

}
