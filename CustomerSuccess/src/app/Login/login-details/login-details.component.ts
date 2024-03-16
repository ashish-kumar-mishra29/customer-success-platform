import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrl: './login-details.component.css',
})
export class LoginDetailsComponent implements OnInit {
  public loggedInUser: any;
  constructor(public _auth: AuthService, public route: Router) {}

  ngOnInit(): void {
    if (this._auth.user$) {
      this._auth.user$.subscribe((data) => {
        console.log('LoggedIn User = ', data);
        
      });
    }
    
  }
  
}
