import { Component, OnInit } from '@angular/core';
import { GetAllService } from 'src/app/services/get-all.service';
import { DeleteService } from 'src/app/services/delete.service';
declare var $: any;
@Component({
  selector: 'app-question-bank',
  templateUrl: './question-bank.component.html',
  styleUrls: ['./question-bank.component.css']
})
export class QuestionBankComponent implements OnInit {
  
  questions: any[] = [];
  /*################ Show All questions ################*/
  constructor(_GetAllService:GetAllService,public _delete:DeleteService) { 
    _GetAllService. getAllQuestionBank().subscribe((data)=>{
     this.questions=data.data ;
    console.log(data.data);
    }
    ,(err)=>{console.log(err)})
  }

/*################  Get EXAM ID ################*/
question_id:any;
getId(id:any){
  this.question_id=id;
  console.log(id);
}

 /*################ Delete question ################*/
 deleteQuestion(){
  let data={
    Id:this.question_id
  }
  this._delete.deleteQuestion(this.question_id).subscribe(res=>{
    console.log(res);
    if(res.msg=="question has been deleted successfully"){
      $("#deleteQuestion").modal('hide');
    }
  })
} 

setValue(){
  
}
  ngOnInit(): void {
  }

}
