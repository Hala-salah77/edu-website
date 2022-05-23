import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-exam-questions',
  templateUrl: './exam-questions.component.html',
  styleUrls: ['./exam-questions.component.css']
})
export class ExamQuestionsComponent implements OnInit {
  examId:any;

  constructor(private _AuthService:AuthService ,
    public _Router:Router,
    public _GetAllService:GetAllService ,
    public _ActivatedRoute:ActivatedRoute) {

      /* ################## Show all Questions of Exam ################## */
       this._GetAllService.showExamAndQuestion(this.examId).subscribe((data)=>{
        console.log(data.data)
         }
         ,(err)=>{console.log(err)
         })   

     }

  ngOnInit(): void {
    
    /*##################  take id from url ##################*/
    this._ActivatedRoute.paramMap.subscribe(params => { 
      let id = params.get('id'); 
      this.examId=id;
      
    });
  }



}
