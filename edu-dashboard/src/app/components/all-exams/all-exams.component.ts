import { Component, OnInit } from '@angular/core';
import { DeleteService } from 'src/app/services/delete.service';
import { GetAllService } from 'src/app/services/get-all.service';
declare var $: any;
@Component({
  selector: 'app-all-exams',
  templateUrl: './all-exams.component.html',
  styleUrls: ['./all-exams.component.css']
})
export class AllExamsComponent implements OnInit {

  /* ################ Show All Exams  ################*/
  exams:any[] =[];
  constructor(public _GetAllService:GetAllService,public _delete:DeleteService) { 
   
     this._GetAllService.getAllEXAMS().subscribe((res)=>{
       this.exams=res.data
   console.log(res.data);
    }
    ,(err)=>{console.log(err)
    })  
  }

 /*################  Get EXAM ID ################*/
  exam_id:any;
  getId(id:any){
    this.exam_id=id;
    console.log(id);
  }

   /*################ Delete Exam ################*/
   deleteExam(){
    let data={
      Id:this.exam_id
    }
    this._delete.deleteExam(this.exam_id).subscribe(res=>{
      console.log(res);
      if(res.msg=="exam deleted successfully"){
        $("#deleteExam").modal('hide');
      }
    })
  } 

  ngOnInit(): void {
  }

}
