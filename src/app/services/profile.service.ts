import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private url="http://localhost:8000/api"
  constructor(private http:HttpClient) { }

  authUser(){
    return this.http.get(this.url+"/profile")
  }
}
