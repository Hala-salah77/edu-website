import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-fixed-navbar',
  templateUrl: './fixed-navbar.component.html',
  styleUrls: ['./fixed-navbar.component.css']
})
export class FixedNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

     // Fixed Menu
var fixed = $(".fixed-menu");
$(".sec-nav i").click(function() {
    $(".sec-nav i").toggleClass("fa-times fa-bars");
    fixed.toggleClass("is-visible");
    if (fixed.hasClass("is-visible")) {
        fixed.animate({ right: '0' }, 500);
        $("body").animate({ paddingRight: fixed.innerWidth() }, 500)
    } else {
        fixed.animate({ right: '-' + fixed.innerWidth() }, 500);
        $("body").animate({ paddingRight: '0' }, 500)
    }
});

  }

  }


