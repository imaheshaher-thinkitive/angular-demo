import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoService } from './todo.service';
import { TodoComponent } from './todo/todo.component';
import { CoursesComponent } from './courses/courses.component';
import { SummayPipe } from './summary.pipe';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { CrudComponent } from './crud/crud.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { RouterModule } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthComponentComponent } from './auth-component/auth-component.component';


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
    HttpClientModule
    ],
  providers: [
    TodoService,
    PostService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
