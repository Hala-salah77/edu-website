import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { BuildExamComponent } from './component/build-exam/build-exam.component';
import { BuildQuestionComponent } from './component/build-question/build-question.component';
import { ExamComponent } from './component/exam/exam.component';
import { StudLongInComponent } from './component/stud-long-in/stud-long-in.component';
import { TeacherLongInComponent } from './component/teacher-long-in/teacher-long-in.component';
import { StudentTeachersComponent } from './component/student-teachers/student-teachers.component';
import { AuthInterceptor } from './auth.interceptor';
import { GetAllService } from './services/get-all.service';
import { AuthService } from './services/auth.service';
import { TeacherStudentsComponent } from './component/teacher-students/teacher-students.component';
import { ShowExamQuestionsComponent } from './component/show-exam-questions/show-exam-questions.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    BuildExamComponent,
    BuildQuestionComponent,
    ExamComponent,
    StudLongInComponent,
    TeacherLongInComponent,
    StudentTeachersComponent,
    TeacherStudentsComponent,
    ShowExamQuestionsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    GetAllService,
    AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
