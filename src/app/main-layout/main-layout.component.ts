import { Component, OnDestroy, OnInit } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'app/shared/auth_and_register/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {
      // this.router.routeReuseStrategy.shouldReuseRoute = function() {
      //   return false;
      // };
      // this.mySubscription = this.router.events.subscribe((event) => {
      //   if (event instanceof NavigationEnd) {
      //     this.router.navigated = false;
      //   }
      // });
    }
  isLoggedIn = false;
  mySubscription: any;
  ngOnInit(): void {
    // window.location.reload();
    if (this.authService.currentUserValue != null) {
      this.isLoggedIn = true;
    } else if (this.authService.currentUserValue == null) {
      this.isLoggedIn = false;
      // this.router.navigate(['/signup']);
    }
    // console.log("user", this.authService.currentUserValue);
  }

  // ngOnDestroy(): void {
  //   if (this.mySubscription) {
  //     this.mySubscription.unsubscribe();
  //   }
  // }

}
