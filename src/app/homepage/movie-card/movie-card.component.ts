import { Component, Input, OnInit } from '@angular/core';
import { LatestSearchService } from 'app/shared/movie/latest-search.service';
import { MoviesService } from 'app/shared/movie/movies.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() img;
  @Input() title;
  @Input() year;
  @Input() rate;
  constructor(private moviesService: MoviesService, private latestSearchService: LatestSearchService) { }

  res;
  mockDatas;
  ngOnInit(): void {
    for(let i = 0; i < this.latestSearchService.latestSearchTitle.length; i++) {
     this.res =  this.moviesService.searchMovieByTitle(this.latestSearchService.latestSearchTitle[i]);
      console.log(this.res);
    }
    this.moviesService.getMockCardDatas().subscribe(data => this.mockDatas = data);
  }

}
