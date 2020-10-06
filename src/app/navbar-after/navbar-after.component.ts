import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../shared/auth_and_register/auth.service';

@Component({
  selector: 'app-navbar-after',
  templateUrl: './navbar-after.component.html',
  styleUrls: ['./navbar-after.component.css']
})
export class NavbarAfterComponent implements OnInit {
    constructor(private router: Router, private authService: AuthService) {
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
  navigate_logout() {
    this.authService.logout();
    this.navigate_login();
  }
  navigate_myprofile() {
    this.router.navigate(['/myprofile']);
  }
  navigate_home() {
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {
  }

}
