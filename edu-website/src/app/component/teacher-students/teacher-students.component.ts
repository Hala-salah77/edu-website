import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router'
import { GetAllService } from 'src/app/services/get-all.service';


@Component({
  selector: 'app-teacher-students',
  templateUrl: './teacher-students.component.html',
  styleUrls: ['./teacher-students.component.css']
})
export class TeacherStudentsComponent implements OnInit {

  public name=localStorage.getItem("name");
  public teacherId=localStorage.getItem("teacherId");
  public nOfExams= localStorage.getItem('nOfExams');
  grades: any[] =[];
  students: any[] =[];
  groups: any[] =[];

  constructor( public _Router:Router ,
    public _GetAllService:GetAllService ,
    public _ActivatedRoute:ActivatedRoute) 
    {

  
 /*################## get All Grades ##################*/
    this._GetAllService.getAllGrades().subscribe((data)=>{
      this.grades=data.data;
      console.log(data.data)
      console.log(data)
       }
       ,(err)=>{console.log(err)
       })  
 /*##################  get All Groups ##################*/
       this._GetAllService.getAllGroups(this.teacherId).subscribe((res)=>{
        console.log(res)
         }
         ,(err)=>{console.log(err)
         }) 
         
/* ################## Get All Students ################## */

     this._GetAllService.getStudents(this.teacherId).subscribe((res)=>{
      this.students=res.teacher_students;
      console.log(res.teacher_students)
       }
       ,(err)=>{console.log(err)
       })  
   }
  
  ngOnInit(): void {
    /*##################  take id from url ##################*/

    /* let id= parseInt(this._ActivatedRoute.snapshot.paramMap.get('id'));
      this.teacherId=id */

     /*  this._ActivatedRoute.paramMap.subscribe(params => { 
        let id = params.get('id'); 
        this.teacherId=id;
      localStorage.setItem("teacherId",this.teacherId)
        console.log(this.teacherId)
      }); */
      
  }


}
