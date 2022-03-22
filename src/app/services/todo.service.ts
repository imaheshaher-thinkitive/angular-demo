import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itodo } from '../todo/todo';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _url = "https://jsonplaceholder.typicode.com/todos"
  constructor(private http:HttpClient) { }
  getTodo():Observable<Itodo[]>{
    return this.http.get<Itodo[]>(this._url)
  }
  addTodo(todo:Itodo){
    return this.http.post<Itodo>(this._url,JSON.stringify(todo)).pipe(catchError(this.errorHandler))
  }

  errorHandler(error:HttpErrorResponse){
    let errorMessage = '';

   if (error.error instanceof ErrorEvent) {

     // client-side error
    errorMessage=error.error.message
    //  errorMessage = Error: `${error.error.message}`

   } else {

     // server-side error

     errorMessage =`${error.status}\nMessage: ${error.message}`

   }

   window.alert(errorMessage);

   return throwError(errorMessage);

 }
  }

