import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  public loggedInUser: any;
  constructor(public _auth: AuthService) {}
  
  ngOnInit(): void {
    if (this._auth.user$) {
      this._auth.user$.subscribe((data) => {
        console.log('LoggedIn User = ', data);
      });
    }
  }
}
