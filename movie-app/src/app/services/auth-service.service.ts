import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiURL = 'https://localhost:7231/api/auth'

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(`${this.apiURL}/login`, { username, password })
    .pipe(
      tap(response => {
        if(response.token){
          localStorage.setItem('token',response.token);
        }
      })
    );
  }

  getToken() {
    return localStorage.getItem('token');
  }


}
