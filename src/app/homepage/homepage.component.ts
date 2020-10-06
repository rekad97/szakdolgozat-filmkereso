import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../shared/movie/movies.service';
import {Router} from '@angular/router';
import {Movie} from '../models/movie';
import {MovieDetailsService} from '../shared/movie/movie-details.service';
import { AuthService } from 'app/shared/auth_and_register/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  isLoggedIn: boolean;
  user;
  constructor(private authService: AuthService) {

   }

  ngOnInit(): void {
    if(this.authService.currentUser === null) {
      this.isLoggedIn = false;
    }else {
      this.isLoggedIn = true;
    }
    this.user = this.authService.currentUserValue;
  }


}
