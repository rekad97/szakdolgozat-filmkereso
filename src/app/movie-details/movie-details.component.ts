import {Component, EventEmitter, Input, OnDestroy, OnInit} from '@angular/core';
import {MoviesService} from '../shared/movie/movies.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {MovieDetailsService} from '../shared/movie/movie-details.service';
import {AuthService} from '../shared/auth_and_register/auth.service';
import { Movie } from 'app/models/movie';
import { first } from 'rxjs/operators';

export interface ResultType {
  id: number;
  movie: object;
}

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
  result: ResultType = {
    id: 0,
    movie: {}
  };
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
  this.result.movie =  this.movieDetailsService.shared.source._value;
  // this.result.movie = this.result;
  this.result.id = this.authService.currentUserValue.id;
  console.log(this.result.movie);
  console.log("id", this.result.id);



  }
  getData() {
    this.result.movie = this.movieDetailsService.sendData();
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
    this.movieService.saveToWatch(this.result).subscribe(data => console.log("saveTowatchService", data ));
  }

addToContinue(){
  this.movieService.saveContinue(this.result).subscribe(data => console.log("saveTowatchService", data ));
}

addToAlreadyWatched() {
  this.movieService.saveAlreadyWatched(this.result).subscribe(data => console.log("saveTowatchService", data ));

}

saveToMainPage() {
// this.movieService.addMainPageMovie(this.result);
// console.log(this.movieService.mainPageMovies);
  console.log('itt van');
  // this.movieService.save(this.result).pipe(first()).subscribe(data => console.log("data", data));
}
}
