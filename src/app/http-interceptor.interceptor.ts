import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error:HttpErrorResponse) => {
        let errorMessage =''
        if ( error.error instanceof ErrorEvent){
          errorMessage=`${error.error.message}`
        }
        else {

          // server-side error

          errorMessage = `${error.status}\nMessage: ${error.message}`

        }

        window.alert(errorMessage);

        return throwError(errorMessage);
      })
    );
  }
}
