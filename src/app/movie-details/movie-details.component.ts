import {Component, EventEmitter, Input, OnDestroy, OnInit} from '@angular/core';
import {MoviesService} from '../shared/movie/movies.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {MovieDetailsService} from '../shared/movie/movie-details.service';
import {AuthService} from '../shared/auth_and_register/auth.service';
import { Movie } from 'app/models/movie';
import { first } from 'rxjs/operators';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers: [MovieDetailsService]
})
export class MovieDetailsComponent implements OnInit {
  toWatch: any[] = [];
  continue: any[];
  alreadyWatched: any[];
  id: string;
  private sub: any;
  result: any ;
  $result = new EventEmitter();
  $toWatch = new EventEmitter();
  selectedMovie;
  title;
  constructor(
    private authService: AuthService,
    private movieService: MoviesService,
    private route: ActivatedRoute,
    private movieDetailsService: MovieDetailsService,
    private router: Router
    )
  {
    console.log(this.result);
  }

  async ngOnInit() {
  await this.movieDetailsService.init();
  this.result =  this.movieDetailsService.shared.source._value;
  console.log(this.result);
  console.log(this.authService.currentUserValue);



  }
  getData() {
    this.result = this.movieDetailsService.sendData();
  }
  getMovieId() {
    let id = 0;
    console.log(this.route);
    this.route.params.subscribe((parameters: Params) => {
      id = parameters['id'];
      console.log(id);
    });
    return id;
  }
  addToWatch() {
    // this.toWatch = JSON.parse(localStorage.getItem('toWatch'));
    // this.toWatch.push(this.result[0].Title);
    // localStorage.setItem('toWatch', JSON.stringify(this.toWatch));
    // this.router.navigate(['mypage']);
    console.log('user', this.authService.currentUserValue.id);


  }
addToContinue(){
  this.continue = JSON.parse(localStorage.getItem('continue'));
  this.continue.push(this.result[0].Title);
  localStorage.setItem('continue', JSON.stringify(this.continue));
  this.router.navigate(['mypage']);



}
addToAlreadyWatched(){
  this.alreadyWatched = JSON.parse(localStorage.getItem('alreadyWatched'));
  this.alreadyWatched.push(this.result[0].Title);
  localStorage.setItem('alreadyWatched', JSON.stringify(this.alreadyWatched));
  this.router.navigate(['mypage']);
}

saveToMainPage() {
// this.movieService.addMainPageMovie(this.result);
// console.log(this.movieService.mainPageMovies);
  console.log('itt van');
  this.movieService.save(this.result).pipe(first()).subscribe(data => console.log("data", data));
}
}
