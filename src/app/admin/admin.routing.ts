import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { AdminListComponent } from "./admin-list/admin-list.component";
import { LoginComponent } from "./login/login.component";

const routes:Routes=[
    {path:'login',component:LoginComponent},
    {path:'list',component:AdminListComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AdminRoutingModule {};