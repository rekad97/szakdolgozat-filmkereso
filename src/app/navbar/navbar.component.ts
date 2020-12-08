import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {NavigationEnd, Router} from '@angular/router';
import { AuthService } from 'app/shared/auth_and_register/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  @Input() isLoggedIn: boolean;
  mySubscription: any;
  constructor(
    private router: Router,
    private authService: AuthService
    ) {}
  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
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
    // window.location.reload()
    console.log("Ő van bent", this.authService.currentUserValue)
  }
  
  navigate_myprofile() {
    this.router.navigate(['/myprofile']);
  }

  ngOnDestroy(): void {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

}