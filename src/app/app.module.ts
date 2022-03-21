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

const routes = [
  {path:'',component:CrudComponent},
  {path:'see/todo',component:CoursesComponent},
  {path:'first-component',component:FirstComponentComponent},
  {path:'second-component',component:SecondComponentComponent}
]
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
    SecondComponentComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    ],
  providers: [
    // TodoService
    PostService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
