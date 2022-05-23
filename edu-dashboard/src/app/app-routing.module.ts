import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AdminSignUpComponent } from './components/admin-sign-up/admin-sign-up.component';
import { AllExamsComponent } from './components/all-exams/all-exams.component';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { AllTeachersComponent } from './components/all-teachers/all-teachers.component';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';
import { ExamQuestionsComponent } from './components/exam-questions/exam-questions.component';
import { ExamRegisterComponent } from './components/exam-register/exam-register.component';
import { FixedNavbarComponent } from './components/fixed-navbar/fixed-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainLinksComponent } from './components/main-links/main-links.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { QuestionBankComponent } from './components/question-bank/question-bank.component';
import { QuestionRegiserComponent } from './components/question-regiser/question-regiser.component';
import { StudentResgisterComponent } from './components/student-resgister/student-resgister.component';
import { TeacherGroupsComponent } from './components/teacher-groups/teacher-groups.component';
import { TeacherResgisterComponent } from './components/teacher-resgister/teacher-resgister.component';

const routes: Routes = [
  {path:'' ,redirectTo:'login',pathMatch:"full" },
  {path:'login' ,component:LoginComponent },
  {path:'home' ,component:HomeComponent },
  {path:'adminSingUp' ,component:AdminSignUpComponent},
  {path:'alLteachers/AddStudent/:id' ,component:AddStudentComponent},
  {path:'alLteachers/deleteStudent/:id' ,component:DeleteStudentComponent},
  {path:'teachersignup' ,component:TeacherResgisterComponent},
  {path:'studsignup' ,component:StudentResgisterComponent },
  {path:'buildExam' ,component:ExamRegisterComponent},
  {path:'questionsBand/regisgerQuestion' ,component:QuestionRegiserComponent},
  {path:'allExams/buildExam' ,component:ExamRegisterComponent},
  {path:'allStudent' ,component:AllStudentsComponent},
  {path:'alLteachers' ,component:AllTeachersComponent},
  {path:'mainlinks/allStudent' ,component:AllStudentsComponent},
  {path:'mainlinks/alLteachers' ,component:AllTeachersComponent},
  {path:'mainlinks/questionsBand' ,component:QuestionBankComponent},
  {path:'mainlinks/allExams' ,component:AllExamsComponent},
  {path:'buildExam/:id' ,component:QuestionRegiserComponent},
  {path:'alLteachers/:id' ,component:TeacherGroupsComponent},
  {path:'buildExam/:id/examQuestions' ,component:ExamQuestionsComponent},
  {path:'mainlinks' ,canActivate:[AuthGuard],component:MainLinksComponent},  
  {path:'questionsBand' ,component:QuestionBankComponent},
  {path:'allExams' ,component:AllExamsComponent},
  {path:'**' ,component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
