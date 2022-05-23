import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GetAllService } from 'src/app/services/get-all.service';
declare var $: any;

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  exam_id=localStorage.getItem("exam_id");
  exam_teacher=localStorage.getItem("exam_teacher");
  exam_title=localStorage.getItem('exam_title');
  exam_fullTime=localStorage.getItem("exam_fullTime");
  questions:any[]=[];
  answers:any[]=[];
  full_mark:any[]=[]; 
  selectedvalue:number[]=[]; 
 q:any[]=[];

  constructor(public _Router:Router, public _AuthService:AuthService, public _getAll:GetAllService) { 

/* #################### Get Exam for Teachers ####################*/
      this._getAll.getExam(25).subscribe((res)=>{
        if(res.status=="success"){
          localStorage.setItem('exam_id',res.data.id)
          localStorage.setItem('exam_teacher',res.data.teacher.name)
          localStorage.setItem('exam_title',res.data.exam_title)
          localStorage.setItem('exam_fullTime',res.data.full_time)
          this.questions=res.questions
          this.answers=res.questions.answers
         console.log(res.questionsquestions);
         console.log(res);
         }
         else{
          this._Router.navigate(['/examError'])
         }
        }
     ,(err)=>{console.log(err)})
  }

/* #################### Get The Value Of Radio Button #################### */

  radioChangeHandler(event:any){
    console.log(event.target)
    this.selectedvalue.push(event.target.name);
    this.selectedvalue.reverse()
      for(let i=0;i<=this.selectedvalue.length;i++){
        console.log(i)
          if(this.selectedvalue[i]==this.selectedvalue[i+1]){
            this.selectedvalue.pop();
           
        } 
    }
    console.log(this.selectedvalue)
    /* for(let i=0;i<=this.selectedvalue.length;i++){
       for(let y=this.selectedvalue.length-1;y>=0;y--){
              this.q.push(this.selectedvalue[y])
              break;
           } 
           
          
      console.log(this.q) 
    } */
      
      /* localStorage.setItem('q',this.selectedvalue);  */
  }

  displayRadioValue(){
    for(let i=0;i<=this.selectedvalue.length;i++){
    } 

  }

  ques(){
    for(let i=0;i<=this.questions.length;i++){
      
    } 

  }
    

 
  /* #################### Start Timer Down For Exam #################### */
  


  ngOnInit(): void {
    
   /*  var exam_fullTime= localStorage.getItem('exam_fullTime');
    var fulltime=Number(this.exam_fullTime)
    setInterval(function(){ 
       fulltime=fulltime-1;
      let fulltimeOfexam=String(fulltime);
       localStorage.setItem('exam_fullTime',fulltimeOfexam)
      console.log(fulltime)
    }, 6000); */










    /* Start Timer Down For Exam */
/*countDiv = document.getElementById('countdown');
let countDown = setInterval(function() {
countDiv.innerHTML = exam_fullTime;
exam_fullTime -= 1;
if (exam_fullTime < 0) {
    document.getElementById("exam").submit();
    clearInterval(countDown);
}
}, 6000); */}

}
