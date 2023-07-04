import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(username: string, email: string, password: string,profesion:string,dateNaissance:Date, roles: string[],file:string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
        profesion,
        dateNaissance,
        roles,
        formData
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }

  forgetpassword(email: string): Observable<any> {
    return this.http.post(AUTH_API + 'forgot-password', { email }, httpOptions);
  }

  resetPassword(token:string , password: string): Observable<any> {
    return this.http.post(AUTH_API + 'reset-password', { token, password }, httpOptions);
  }
}
