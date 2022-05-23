import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _AuthService:AuthService, private _Router:Router) {
   
  }
  logOut(){
    localStorage.clear();
   /*  $('.fixed-menu').remove(); */
    this._Router.navigate(['./adminLogin']);

  }
 ngOnInit(): void {
 }

}
