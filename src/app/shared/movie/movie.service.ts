import { Injectable } from '@angular/core';
import {User} from '../../models/user';
import {AuthService} from '../auth_and_register/auth.service';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private authService: AuthService, private http: HttpClient) { }

  saveToWatch(movie: any) {

  }
  saveToContinue(){

  }

}
