import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { SignInService } from '../../services/sign-in.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public loginForm = {
    email: null,
    password: null
  }
  public isLoggedIn;
  public user;
  @ViewChild('btnClose') btnClose : ElementRef 

  constructor(
    private _loginService: SignInService,
    private _authServices: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.isLoggedIn = this._loginService.isLoggedIn()
    this._authServices.authStatus.subscribe(value => this.isLoggedIn = value);
  }

  onSignin() {
    this._loginService.login(this.loginForm).subscribe(
      data => this.handle(data)
    )
  }

  handle(data) {
    this.user = data;
    this._loginService.handle(this.user);
    this._authServices.changeAuthStatus(true);
    this.btnClose.nativeElement.click();
    this._loginService.emitChange(sessionStorage.getItem('username'));
    
  }
}
