import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Board} from '../models/board';
import {Column} from '../models/column';
import {MoviesService} from '../shared/movie/movies.service';
import {MovieDetailsComponent} from '../movie-details/movie-details.component';
import {MovieDetailsService} from '../shared/movie/movie-details.service';
import {AuthService} from '../shared/auth_and_register/auth.service';


@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})
export class MypageComponent implements OnInit {
result;
addToWatch;
toWatch = JSON.parse(localStorage.getItem('toWatch'));
continue = JSON.parse(localStorage.getItem('continue'));
  alreadyWatched = JSON.parse(localStorage.getItem('alreadyWatched'));
  constructor(private router: Router, private authService: AuthService, private movieService: MoviesService, private route: ActivatedRoute, private movieDetailsService: MovieDetailsService) {
  }


  board: Board = new Board('Movies', [
    new Column('To watch', this.toWatch),
    new Column('Continue', this.continue),
    new Column('Already watched', this.alreadyWatched)
  ]);

  ngOnInit(): void {

  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
     // console.log(event.container.data,  event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      console.log(event.container);
      console.log(event.container.data,  event.previousIndex, event.currentIndex);
      if (event.container.id === 'cdk-drop-list-0'){
        this.toWatch = JSON.parse(localStorage.getItem('toWatch'));
        console.log(event.container.data[event.previousIndex]);
        this.toWatch.push(event.container.data[event.previousIndex]);
        localStorage.setItem('toWatch', JSON.stringify(this.toWatch));
      }
    }

  }

  navigate() {
    this.router.navigate(['/login']);
  }

}

