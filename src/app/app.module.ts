import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { CoursesComponent } from './courses/courses.component';
import { SummayPipe } from './summary.pipe';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { CrudComponent } from './crud/crud.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostService } from './services/post.service';
import { RouterModule } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { CourseService } from './services/course.service';
import { TodoService } from './services/todo.service';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CoursesComponent,
    SummayPipe,
    ContactFormComponent,
    SignupFormComponent,
    CrudComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    NotFoundComponent,
    AuthComponentComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    ],
  providers: [
    PostService,
    CourseService,
    TodoService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpInterceptorInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    },

    AuthGuard
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
