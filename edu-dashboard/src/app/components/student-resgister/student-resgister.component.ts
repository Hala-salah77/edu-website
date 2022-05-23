import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { GetAllService } from 'src/app/services/get-all.service';
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-student-resgister',
  templateUrl: './student-resgister.component.html',
  styleUrls: ['./student-resgister.component.css']
})
export class StudentResgisterComponent implements OnInit {
 
  grades: any[] =[];
  constructor(private _AuthService:AuthService, public _GetAllService:GetAllService) { 
    this._GetAllService.getAllGrades().subscribe((data)=>{
      this.grades=data.data;
      console.log(data.data)
       }
       ,(err)=>{console.log(err)
       })  
  } 
  studentSignUp=new FormGroup({ 
  name:new FormControl('',Validators.required),
  password:new FormControl('',Validators.required),
  phone:new FormControl('',Validators.required),
  email:new FormControl('',Validators.required),
  grade_id:new FormControl('',Validators.required) 
    
  });
  FormData(){
     console.log(this.studentSignUp.value); 
   this. _AuthService.studentSignUp(this.studentSignUp.value).subscribe(response=>{
     console.log(response);
   }) 
  } 
  ngOnInit(): void {
  }

}
