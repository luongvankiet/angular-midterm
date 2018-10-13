import { Component, OnInit, TemplateRef } from '@angular/core';
import { SignInService } from '../../services/sign-in.service';
import { AuthService } from '../../services/auth.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn: boolean;
  public username;
  public categories$;
  public subcategories$;
  public sub;

  constructor(
    private _signinService: SignInService,
    private _authServices: AuthService,
    private _categoryServices: CategoryService
  ) { }

  ngOnInit() {
    this._authServices.authStatus.subscribe(value => this.isLoggedIn = value);
    this.isLoggedIn = this._signinService.isLoggedIn();
    this._signinService.changeEmitted$.subscribe(
      text => {
        this.username = text;
      });

    this.categories$ = this._categoryServices.categories$;
    this.subcategories$ = this._categoryServices.subcategories$;
    this.updateNav();

  }

  updateNav() {
    this._signinService.emitChange(sessionStorage.getItem('username'));
  }

  onLogout(event: MouseEvent) {
    event.preventDefault();
    this._signinService.logout();
    this._authServices.changeAuthStatus(false);
  }
}
