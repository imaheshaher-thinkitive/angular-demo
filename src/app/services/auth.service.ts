import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:8000/api';
  constructor(private http: HttpClient) {}

  loginUser(data: Object) {
    console.log(data);
    return this.http.post(this.url + '/login', data);
  }

  isLoggedIn(): boolean {
    try {

    
    let myRawToken: any = localStorage.getItem('token');
    const helper = new JwtHelperService();

    const decodedToken = helper.decodeToken(myRawToken);
    const expirationDate = helper.getTokenExpirationDate(myRawToken);
    const isExpired = helper.isTokenExpired(myRawToken);
      console.log(isExpired)
    if (!myRawToken) return false;
    else if (myRawToken.trim() == '') return false;
    return true;
    }
    catch(e){
      console.log(e)
      return false
    }
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
