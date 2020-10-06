import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth_and_register/auth.service';
import {User} from '../models/user';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
currentUser: User;
  constructor(private authService: AuthService) {
    this.currentUser = this.authService.currentUserValue;
  }

  ngOnInit(): void {
  }

}
