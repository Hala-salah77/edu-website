import { HttpClient, HttpHandler, HttpRequest } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService ,private _Router:Router ,public _HttpClient:HttpClient) { 

    if(this._AuthService.isLoggedIn()){
      this._Router.navigate(['/mainlinks'])
    }
   } 

  adminlogin=new FormGroup({ 
    name:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  });
  FormData(){
     console.log(this.adminlogin.value); 
    this. _AuthService.adminlogin( this.adminlogin.value).subscribe(response=>{

     if(response.msg=="Admin login successfully"){
      console.log(response)
       this._Router.navigate(['/mainlinks'])
       localStorage.setItem('api_token',response.data.api_token)
     }
   }) 

   
  } 
  ngOnInit(): void {
    
  }

}

