import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.css']
})
export class AdminSignUpComponent implements OnInit {

isClicked= false
  isSuccess= false
  ResponseMessage=''
  isUniqueEmailMessage=''
  isUniqueEmail=false
  constructor( private _AuthService:AuthService ) { 
    
  } 
  adminSignUp=new FormGroup({  
    name:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    email:new FormControl('',Validators.email),
    phone:new FormControl('',Validators.required),
    image:new FormControl(),
  });
  
  FormData(){

    this.isClicked=true;

    if(this.adminSignUp.valid){
    this. _AuthService.adminSignUp(this.adminSignUp.value).subscribe(response=>{
     if(response.message=="success"){ 
       this.isClicked=false
       this.isSuccess=true
       this.isUniqueEmail=false
       this.ResponseMessage=response.message
       this.adminSignUp.reset()
     }
     else{

       this.isUniqueEmailMessage=response.errors.message
       this.isUniqueEmail=true
       this.isSuccess=false
       this.isClicked=false
     }
     console.log(response)
   }) 
  }
      }

  ngOnInit(): void {
    
  }
  

}
