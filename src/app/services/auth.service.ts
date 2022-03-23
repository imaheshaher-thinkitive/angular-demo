import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url="http://localhost:8000/api"
  constructor(private http:HttpClient) { }

  loginUser(data:Object ){
    console.log(data)
    return this.http.post(this.url+"/login",data)
  }

  isLoggedIn():boolean|string{
    let token = localStorage.getItem("token")
    if(!token)return false
    else if(token.trim()=="")return false
    return true
  }
  getToken(){
    return localStorage.getItem("token")
  }
}
