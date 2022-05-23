import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators ,FormArray} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-teacher-resgister',
  templateUrl: './teacher-resgister.component.html',
  styleUrls: ['./teacher-resgister.component.css']
})
export class TeacherResgisterComponent implements OnInit {
/*   imageSrc: string; */
  subjects: any[] = [];
  constructor(private _AuthService:AuthService, public _GetAllService:GetAllService) { 
    this._GetAllService.getAllSubjects().subscribe((data)=>{
      this.subjects=data.data;
      console.log(data.data)
       }
       ,(err)=>{console.log(err)
       })  
  } 
  
  teacherSignUp=new FormGroup({ 
    name:new FormControl('',Validators.required),
   password:new FormControl('',Validators.required),
   phone:new FormControl('',Validators.required),
    subject_name:new FormControl('',Validators.required),
    no_exams:new FormControl('',Validators.required),
    image:new FormControl(),
    email:new FormControl()
    
  });
  FormData(){
     console.log(this.teacherSignUp.value); 
   this. _AuthService.teacherSignUp(this.teacherSignUp.value).subscribe(response=>{
     console.log(response);
   }) 
  } 
  /* onFileChange(event:string) {

    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        this.teacherSignUp.patchValue({
          fileSource: reader.result
        });
      };
    }

  } */
  ngOnInit(): void {
    
  }
  
 
}
