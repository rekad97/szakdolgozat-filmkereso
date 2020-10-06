import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/shared/auth_and_register/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor(private authService: AuthService) { }
  isLoggedIn = false;
  ngOnInit(): void {
    if(this.authService.currentUser != null) {
      this.isLoggedIn = true;
    }
  }

}
