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


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CoursesComponent,
    SummayPipe,
    ContactFormComponent,
    SignupFormComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    // TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
