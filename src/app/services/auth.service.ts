import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAutenticated = null;

  constructor(private http: HttpClient) { }

  SignInWithUsernameAndPassword(username, password) {

    return this.http.post("http://localhost:9090/login", {username, password})

  }

  UserIsAutenticated() {
    this.isAutenticated = !! localStorage.getItem('token');
  }

}
