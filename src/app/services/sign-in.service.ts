import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  private updateNavbar = new Subject<any>();
  changeEmitted$ = this.updateNavbar.asObservable();
  emitChange(change: any) {
    this.updateNavbar.next(change);
  }
  
  constructor(private _http: HttpClient) {
    this.isLoggedIn();
  }

  login(form) {
    return this._http.post("http://localhost:8080/Mid_term/rest/services/login", form);
  }

  handle(data) {
    let username = data.username;
    sessionStorage.setItem('username', username);
    this.isLoggedIn();
  }

  logout() {
    sessionStorage.removeItem('username');
    this.isLoggedIn();
  }

  isLoggedIn() {
    let session = sessionStorage.getItem('username');
    sessionStorage.removeItem('isLoggedIn');
    if (session) {
      sessionStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    sessionStorage.setItem('isLoggedIn', 'false');
    return false;
  }
}
