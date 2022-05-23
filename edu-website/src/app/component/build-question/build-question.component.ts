import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router, ParamMap} from '@angular/router'
import { AuthService } from 'src/app/services/auth.service';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-build-question',
  templateUrl: './build-question.component.html',
  styleUrls: ['./build-question.component.css']
})
export class BuildQuestionComponent implements OnInit {
  examId:any;
  subjectId:any;
  constructor(private _AuthService:AuthService ,
    public _Router:Router,
    public _GetAllService:GetAllService ,
    public _ActivatedRoute:ActivatedRoute)  { }

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
   noexams(){
      var nOfExams= localStorage.getItem("nOfExams");
      var nOfExams2=Number(nOfExams);
      nOfExams2=nOfExams2-1;
      var nOfExams3=String(nOfExams2)
      localStorage.setItem("nOfExams",nOfExams3);
  } 

  ngOnInit(): void {
   

    /*##################  take id from url ##################*/

    this._ActivatedRoute.paramMap.subscribe(params => { 
      let id = params.get('id'); 
      this.examId=id;
    });
  }
}


