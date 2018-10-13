import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SignInService } from './sign-in.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject<boolean>(this._signinService.isLoggedIn());
  authStatus = this.isLoggedIn.asObservable();

  changeAuthStatus(value: boolean) {
    this.isLoggedIn.next(value)
  }
  constructor(private _signinService: SignInService) { }
}
