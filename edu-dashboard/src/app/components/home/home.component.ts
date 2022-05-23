import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  constructor() { }
  contact=new FormGroup({ 
    userName:new FormControl('',Validators.required),
    userEmail:new FormControl('',Validators.required)
  });
   /* Start Contact Form Effect */
   ngOnInit(): void {
   /*   $(".contact-us .form-group input , .contact-us .form-group textarea").focus(function () {
      $(this).parent().find("label").addClass("active-label")

    })

  $(".contact-us .form-group input, .contact-us .form-group textarea").blur(function () {
    $(this).parent().find("label").removeClass("active-label") 

  }) */
  }

}
