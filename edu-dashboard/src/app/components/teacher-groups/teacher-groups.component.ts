import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router'
import { GetAllService } from 'src/app/services/get-all.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { DeleteService } from 'src/app/services/delete.service';
import {Location} from '@angular/common';
declare var $: any;
@Component({
  selector: 'app-teacher-groups',
  templateUrl: './teacher-groups.component.html',
  styleUrls: ['./teacher-groups.component.css']
})
export class TeacherGroupsComponent implements OnInit {
  public teacherId:any;
  groups:any[]=[];
  grades: any[] =[];
  constructor(public _ActivatedRoute:ActivatedRoute,
    public _Router:Router ,
    public _GetAllService:GetAllService ,
    public _AuthService:AuthService,
    public _delete:DeleteService,
    public _location: Location) {


/* ##################  Get All Grades  ################## */
     this._GetAllService.getAllGrades().subscribe((data)=>{
      this.grades=data.data;
      console.log(data.data)
       }
       ,(err)=>{console.log(err)
       })  
 
  } 
   

  ngOnInit(): void {

   /*##################  take id from url ##################*/

   
      this._ActivatedRoute.paramMap.subscribe(params => { 
        let id = params.get('id'); 
        this.teacherId=id;
      });
  }
/* ##################  Add Group For Teacher Grade ##################*/

  addGroup=new FormGroup({ 
    grade_id:new FormControl('',Validators.required),
    group_name:new FormControl('',Validators.required),
    teacher_id:new FormControl()
    });

    FormData(){
       console.log(this.addGroup.value); 
      this. _AuthService.addGroupForTeacher(this.addGroup.value).subscribe(response=>{
       console.log(response);
     }) 
/* ##################  Get All Groups In Grade  ################## */
       
    this._AuthService.getAllGroupsInGrade(this.addGroup.value).subscribe((res)=>{
      console.log(res);
      this.groups=res.data;
      }
      ,(err)=>{console.log(err)}) 
        
        } 


/*################  Get Group ID ################*/
group_id:any;
getId(id:any){
  this.group_id=id;
  console.log(id);
}

 /*################ Delete question ################*/
 deleteGroup(){
  let data={
    Id:this.group_id
  }
  this._delete.deleteGroup(this.group_id).subscribe(res=>{
    console.log(res);
    if(res.msg=="group has been deleted successfully"){
      $("#deleteGroup").modal('hide');
    }
  })
} 

backClicked() {
  this._location.back();
}

}

