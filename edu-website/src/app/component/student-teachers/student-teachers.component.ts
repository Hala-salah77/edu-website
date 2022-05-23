import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GetAllService } from 'src/app/services/get-all.service';
declare var $: any;

@Component({
  selector: 'app-student-teachers',
  templateUrl: './student-teachers.component.html',
  styleUrls: ['./student-teachers.component.css']
})

export class StudentTeachersComponent implements OnInit {
AllTeachers:any[]=[];
AllTeachersIds:any[]=[];
studentInfo:any[]=[];
exam:any[]=[];
name=localStorage.getItem("name");
  constructor(public _Router:Router, public _AuthService:AuthService, public _getAll:GetAllService) { 

 this._getAll.getMyTeachers().subscribe(res=>{
  this.AllTeachers=res.student_teachers
  console.log(res.student_teachers)
})  

if( !localStorage.getItem('api_token') ){
  this._Router.navigate(['./studentTeachers'])
  
}

} 


  ngOnInit(): void {
    $("#startExamBtn").click(function() {
        $("#exampleModal2").modal('hide');
    });
    this._getAll.getNotifications(25).subscribe(res=>{
      this.AllTeachers=res.student_teachers
      console.log(res)
      console.log("hhhh11")
    }) 
 for(let i=0;i<this.AllTeachers.length;i++){}
}


hide(){
  $("#exam").modal('hide');
  $("#exampleModal6").modal('hide');
}

}


