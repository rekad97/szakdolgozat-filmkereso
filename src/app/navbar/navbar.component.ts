import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Router} from '@angular/router';
import { AuthService } from 'app/shared/auth_and_register/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean;
  constructor(
    private router: Router,
    private authService: AuthService
    ) {}
  ngOnInit(): void {
    if (this.authService.currentUserValue != null) {
      this.isLoggedIn = true;
    } else if (this.authService.currentUserValue != null) {
      this.isLoggedIn = false;
    }
  }
  navigate_login() {
    this.router.navigate(['/login']);
  }
  navigate_signup() {
    this.router.navigate(['/signup']);
  }
  navigate_mypage() {
    this.router.navigate(['/mypage']);
  }
  navigate_movies() {
    this.router.navigate(['/movies']);
  }
  navigate_home() {
    this.router.navigate(['/home']);
  }
 
  navigate_logout() {
    this.authService.logout();
    this.navigate_login();
  }
  
  navigate_myprofile() {
    this.router.navigate(['/myprofile']);
  }
}