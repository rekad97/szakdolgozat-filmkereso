import { Component, OnInit } from '@angular/core';
import {Movie} from '../models/movie';
import {MoviesService} from '../shared/movie/movies.service';
import {Router} from '@angular/router';
import { LatestSearchService } from 'app/shared/movie/latest-search.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  title: string;
  result: any = [];
  selectedMovie: Movie;

  searchMovie(title: string) {
    this.movieService.searchMovieByTitle(title).subscribe((result: any) => {
      console.log(result);
      this.result = result.Search;
      this.title = title;
      console.log(this.title);
      this.latestSearchService.latestSearchTitle.push(this.result);
    });
  }
  columns: string[] = ['title', 'year', 'poster', 'details'];
  constructor(private movieService: MoviesService, private router: Router, private latestSearchService: LatestSearchService) { }

  ngOnInit(): void {
  }

  navigate_movie_detail() {
    this.router.navigate(['/movie/:id']);
  }
  select(movie: Movie) {
    this.selectedMovie = movie;
    console.log(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
    this.navigate_movie_detail();
  }
details(movie){
    this.router.navigate(['/movie', movie.imdbID]);
}
navigate() {
  this.router.navigate(['/card']);

}
}
