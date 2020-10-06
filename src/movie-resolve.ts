import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {MoviesService} from './app/shared/movie/movies.service';
import {Movie} from './app/models/movie';

@Injectable()
export class MovieResolve implements Resolve<Movie> {

  constructor(private movieService: MoviesService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.movieService.getMovie(route.paramMap.get('id'));
  }
}
