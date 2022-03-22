import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private _url="https://jsonplaceholder.typicode.com/todos"
  constructor(private http:HttpClient) { }
  getTodos(){
    return this.http.get(this._url)
  }
}
