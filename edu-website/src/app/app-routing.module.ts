import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { build$ } from 'protractor/built/element';
import { BuildExamComponent } from './component/build-exam/build-exam.component';
import { BuildQuestionComponent } from './component/build-question/build-question.component';
import { ExamComponent } from './component/exam/exam.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ShowExamQuestionsComponent } from './component/show-exam-questions/show-exam-questions.component';
import { StudLongInComponent } from './component/stud-long-in/stud-long-in.component';
import { StudentTeachersComponent } from './component/student-teachers/student-teachers.component';
import { TeacherLongInComponent } from './component/teacher-long-in/teacher-long-in.component';
import { TeacherStudentsComponent } from './component/teacher-students/teacher-students.component';

const routes: Routes = [
  {path:'' ,redirectTo:'home',pathMatch:"full" },
  {path:'studsignin' ,component:StudLongInComponent },
  {path:'teachersignin' ,component:TeacherLongInComponent },
  {path:'studentTeachers' ,component:StudentTeachersComponent},
  {path:'buildExam/:id' ,component:BuildQuestionComponent},
  {path:'buildQuestion/:id' ,component:ShowExamQuestionsComponent},
  {path:'home' ,component:HomeComponent}, 
  {path:'teacherStudents/:id' ,component:TeacherStudentsComponent},
  {path:'buildExam' ,component:BuildExamComponent},
  {path:'exam' ,component:ExamComponent},
  {path:'teacherStudents/:id/buildExam' ,component:BuildExamComponent},
  {path:'**' ,component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
