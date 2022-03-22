import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { CrudComponent } from './crud/crud.component';
import { CoursesComponent } from './courses/courses.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  {path:'todo',component:TodoComponent},
  {path:'post',component:CrudComponent},
  {path:'see/todo',component:CoursesComponent},
  {path:'first-component/:name',component:FirstComponentComponent},
  {path:'second-component',component:SecondComponentComponent},
  {path:'sign-up',component:SignupFormComponent},
  {path:'contact',component:ContactFormComponent},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
