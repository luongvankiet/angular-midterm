import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _router: Router) {
    setTheme('bs3');
    
  }


}
