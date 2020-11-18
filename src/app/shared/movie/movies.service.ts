import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {delay, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { of } from 'rxjs';
import {Movie} from '../../models/movie';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { mockMovies } from 'app/models/card.mock';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movie: any;
  selectedMovie: Movie;
  mainPageMovies: Movie[] = [];
  URL;

  constructor(
    private http: HttpClient
    ) {}

searchMovieByTitle(title: string) {
const url = 'http://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?s=' + title + '&apikey=7b464f43';
this.URL = url;
return this.http.get(url).pipe(map((response => {
    this.movie = response;
    return response;
    console.log(response);
    localStorage.setItem('search', response.toString());
  })));

}
  searchMovieByID(id: number) {
    const url = 'http://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?i=' + id + '&apikey=7b464f43';
    this.URL = url;
    return this.http.get(url).pipe(map((response => {
      this.movie = response;
      return response;
      console.log(response);
      localStorage.setItem('search', response.toString());
    })));

  }

  getMovie(id) {
    return of({
      imdbID: id,
      Title: this.movie.Title,
      Year: this.movie.Year,
      Runtime: this.movie.Runtime,
      Genre: this.movie.Genre,
      Actors: this.movie.Actors,
      Plot: this.movie.Plot,
      Poster: this.movie.Poster
    });
  }

  getMockCardDatas(): Observable<any> {
    return of(mockMovies);
  }

  addMainPageMovie(movie: Movie) {
    this.mainPageMovies.push(movie);
  }

  save(movie: Movie) {
    console.log("save", movie);
    return this.http.post(`http://localhost:3000/movies/saveMovie`, movie);

  }
}

