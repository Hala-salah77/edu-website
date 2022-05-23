import { Component, OnInit } from '@angular/core';
import {Router} from'@angular/router';
@Component({
  selector: 'app-main-links',
  templateUrl: './main-links.component.html',
  styleUrls: ['./main-links.component.css']
})
export class MainLinksComponent implements OnInit {

  constructor(public _Router:Router) {
    if(!localStorage.getItem('api_token')){
      this._Router.navigate(['/login'])
    }
   }

  ngOnInit(): void {
  }

}
