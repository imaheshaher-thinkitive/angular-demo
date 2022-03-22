import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdminListComponent } from './admin-list/admin-list.component';



@NgModule({
  declarations: [
    LoginComponent,
    AdminListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
