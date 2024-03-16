import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-stakeholder-dashboard',
  templateUrl: './stakeholder-dashboard.component.html',
  styleUrl: './stakeholder-dashboard.component.css',
})
export class StakeholderDashboardComponent implements OnInit {
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
