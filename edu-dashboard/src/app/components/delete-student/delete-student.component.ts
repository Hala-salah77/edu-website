import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router, ParamMap} from '@angular/router'
import { AuthService } from 'src/app/services/auth.service';
import { GetAllService } from 'src/app/services/get-all.service';
import {Location} from '@angular/common';
import { DeleteService } from 'src/app/services/delete.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {
  public teacherId:any;
  students: any[] = [];
  groups:any;

  constructor(public _GetAllService:GetAllService,
    private _delete:DeleteService,
    public _Router:Router ,
    public _ActivatedRoute:ActivatedRoute,
    private _location: Location,
    )
     { 

    _GetAllService.getAllStudents().subscribe((data)=>{
     this.students=data.data ;
    console.log(data.data);
    }
    ,(err)=>{console.log(err)})
  }

  deleteStudent=new FormGroup({ 
    student_id:new FormControl('',Validators.required),
    teacher_id:new FormControl('',Validators.required),
    group_id:new FormControl('',Validators.required),
  });

  FormData(){
     console.log(this.deleteStudent.value); 
   this. _delete.deleteStudentToTeacher( this.deleteStudent.value).subscribe(response=>{
      console.log(response)
   }) 
  } 



  
  /*################  Get Studet ID ################*/
  student_id:any;
  getstudentId(id:any){
    this.student_id=id;
    console.log(id);
  }
  ngOnInit(): void {

    /*##################  take id from url ##################*/

      this._ActivatedRoute.paramMap.subscribe(params => { 
        let id = params.get('id'); 
        this.teacherId=id;
      });

      this. _GetAllService.getTeacherGroupsforAdmin(this.teacherId).subscribe((res)=>{
      this.groups=res.teacher_groups; 
        console.log(res)
         }
         ,(err)=>{console.log(err)
         })  
      
  }

  backClicked() {
    this._location.back();
  }

}
