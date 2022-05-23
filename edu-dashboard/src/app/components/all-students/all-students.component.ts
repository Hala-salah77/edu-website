import { Component, OnInit } from '@angular/core';
import { GetAllService } from 'src/app/services/get-all.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {
  teachers:any;
  students: any[] = [];
  grades: any[] = [];
  groups: any[] = [];
  studenets: any[] = [];
  exams:any[]=[];
  constructor(public _GetAllService:GetAllService, public _AuthService:AuthService,) { 
    _GetAllService.getAllStudents().subscribe((res)=>{
     this.students=res.data ;
    console.log(res);
    }
    ,(err)=>{console.log(err)})

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
   /*################  Get Student ID ################*/
   studentId:any;
   getId(id:any){
     this.studentId=id;
     console.log(id);
   }

   getAllTEACHERS=new FormGroup({ 
    student_id:new FormControl('',Validators.required),
     teacher_id:new FormControl()
     });


    searchBox=new FormGroup({ 
    student_name:new FormControl(),
    grade_id:new FormControl(),
    group_id:new FormControl(),
      });
 
     FormData(){ 
      
 /* ##################  Get Search Results  ################## */
     
  this. _GetAllService.getListOfStudentsInExam(this.searchBox.value).subscribe((res)=>{
    this.students=res.data ;
      console.log(res);
      }
      ,(err)=>{console.log(err)})


 /* ##################  Get All Groups In Grade  ################## */
        
  this. _AuthService.getAllTeachersForStudent(this.getAllTEACHERS.value).subscribe((res)=>{
 this.teachers=res.data ;
  console.log(res);
  }
  ,(err)=>{console.log(err)})


  this. _AuthService.getResaultExamsByTeacher(this.getAllTEACHERS.value).subscribe((res)=>{
    this.exams=res.data ;
     console.log(res);
     }
     ,(err)=>{console.log(err)})
  
}
 // ######################## edit ########################
 setvalue(){
  for (let index=0; index< this.students.length;index++){
    if(this.students[index].id==this.studentId){
      console.log(this.teachers[index])
    }
  }
}



  ngOnInit(): void {
  }

}



  


 


 