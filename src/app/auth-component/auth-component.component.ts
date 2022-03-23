import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckResponse } from '../common/ResponseCheck';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent implements OnInit {
  loginButton=false
  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })
  constructor(private service:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }

  onLogin(){
    // console.log(this.loginForm.value)
    if(this.loginForm.valid){

      let data = this.loginForm.value
      this.service.loginUser(data).subscribe((response:any)=>{
       let res = CheckResponse.checkResponse(response)
       if(res){
         localStorage.setItem("token",response.token)
         this.router.navigate(["/todo"])
       }

      })
    }
  }
  getForm(){
    return this.loginForm.controls
  }
}
