import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AllTeachersComponent } from './components/all-teachers/all-teachers.component';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { TeacherResgisterComponent } from './components/teacher-resgister/teacher-resgister.component';
import { StudentResgisterComponent } from './components/student-resgister/student-resgister.component';
import { ExamRegisterComponent } from './components/exam-register/exam-register.component';
import { QuestionRegiserComponent } from './components/question-regiser/question-regiser.component';
import { QuestionBankComponent } from './components/question-bank/question-bank.component';
import { AllExamsComponent } from './components/all-exams/all-exams.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FixedNavbarComponent } from './components/fixed-navbar/fixed-navbar.component';
import { AdminSignUpComponent } from './components/admin-sign-up/admin-sign-up.component';
import { MainLinksComponent } from './components/main-links/main-links.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthService } from './services/auth.service';
import { GetAllService } from './services/get-all.service';
import { AuthInterceptor } from './auth.interceptor';
import { TeacherGroupsComponent } from './components/teacher-groups/teacher-groups.component';
import { HomeComponent } from './components/home/home.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { DeleteService } from './services/delete.service';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';
imports: [
  ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
]




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AllTeachersComponent,
    AllStudentsComponent,
    TeacherResgisterComponent,
    StudentResgisterComponent,
    ExamRegisterComponent,
    QuestionRegiserComponent,
    QuestionBankComponent,
    AllExamsComponent,
    NavbarComponent,
    FooterComponent,
    FixedNavbarComponent,
    AdminSignUpComponent,
    MainLinksComponent,
    NotFoundComponent,
    TeacherGroupsComponent,
    HomeComponent,
    AddStudentComponent,
    DeleteStudentComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    GetAllService,
    DeleteService,
    
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
