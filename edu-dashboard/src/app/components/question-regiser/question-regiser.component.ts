import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router, ParamMap} from '@angular/router'
import { AuthService } from 'src/app/services/auth.service';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-question-regiser',
  templateUrl: './question-regiser.component.html',
  styleUrls: ['./question-regiser.component.css']
})
export class QuestionRegiserComponent implements OnInit {
  examId:any;
  subjects: any[] = [];

  constructor(private _AuthService:AuthService ,
    public _Router:Router,
    public _GetAllService:GetAllService ,
    public _ActivatedRoute:ActivatedRoute) { 

    this._GetAllService.getAllSubjects().subscribe((data)=>{
      this.subjects=data.data;
      console.log(data.data)
       }
       ,(err)=>{console.log(err)
       })  
  
   } 
   questionRegister=new FormGroup({ 
    exam_id:new FormControl(''),
    question_name:new FormControl('',Validators.required),
    question_image:new FormControl(''),
    mark:new FormControl('',Validators.required),
    answer_1:new FormControl('',Validators.required),
    image_answer_1:new FormControl(''),
    answer_2:new FormControl('',Validators.required),
    image_answer_2:new FormControl(),
    answer_3:new FormControl('',Validators.required),
    image_answer_3:new FormControl(''),
    answer_4:new FormControl('',Validators.required),
    image_answer_4:new FormControl(''),
    subject_id:new FormControl('',Validators.required)
  });

  FormData(){
    console.log(this.questionRegister.value); 
   this. _AuthService.questionSignup( this.questionRegister.value).subscribe(response=>{
   console.log(response);
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
