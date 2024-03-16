import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  isLoggedIn: boolean = false;
 
  @ViewChild('navbarItems', {static: false}) navbarItemsRef!: ElementRef;
  scrollStep = 200; // Adjust scroll step as needed

  scrollNext() {
    const navbarItems = this.navbarItemsRef.nativeElement;
    navbarItems.scrollLeft += this.scrollStep;
  }

  scrollPrevious() {
    const navbarItems = this.navbarItemsRef.nativeElement;
    navbarItems.scrollLeft -= this.scrollStep;
  }
  constructor(public _auth: AuthService) {
    this._auth.isAuthenticated$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
      console.log('Authentication status changed:', loggedIn);
    });
    if (this._auth.user$) {
      this._auth.user$.subscribe((data) => {
        console.log('LoggedIn User = ', data);
      });
    }
  }
}
