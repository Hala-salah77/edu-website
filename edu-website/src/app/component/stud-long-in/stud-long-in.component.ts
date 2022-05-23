import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stud-long-in',
  templateUrl: './stud-long-in.component.html',
  styleUrls: ['./stud-long-in.component.css']
})
export class StudLongInComponent implements OnInit {
  public name:any;
  public studentId:any;

  constructor(private _AuthService:AuthService , public http: HttpClient ,public _Router:Router) {
    if(this._AuthService.isLoggedIn()){
      this._Router.navigate(['./studentTeachers']);
    }
    } 

  studentLogIn=new FormGroup({ 
    name:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  });
  
  FormData(){
    console.log(this.studentLogIn.value); 
   this. _AuthService. studentSignIn( this.studentLogIn.value).subscribe(response=>{

    if(response.msg=="Student login successfully"){
     console.log(response.data);
     this.name= localStorage.setItem('name',response.data.name);
     this.studentId= localStorage.setItem('studentId',response.data.id);
      this._Router.navigate(['./studentTeachers']);
      localStorage.setItem('api_token',response.data.api_token)
    }
  }) 

 } 


  ngOnInit(): void {
  }

}
