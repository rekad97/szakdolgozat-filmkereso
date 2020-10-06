import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth_and_register/auth.service';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit {

  constructor(private authService: AuthService) { }
user;
  ngOnInit(): void {
    this.user = this.authService.currentUserValue;
  }

}
