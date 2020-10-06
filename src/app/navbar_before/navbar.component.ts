import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {
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
}
