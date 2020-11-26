import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Board } from '../models/board';
import { Column } from '../models/column';
import { MoviesService } from '../shared/movie/movies.service';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { MovieDetailsService } from '../shared/movie/movie-details.service';
import { AuthService } from '../shared/auth_and_register/auth.service';
import { UserService } from 'app/shared/auth_and_register/user.service';
import { User } from 'app/models/user';
import { map } from 'rxjs/internal/operators/map';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})
export class MypageComponent implements OnInit {
  result;
  toWatch = [];
  toWatchDataObject: any[] = [];
  toWatchTmp = [];
  continue = [];
  continueTmp = [];
  continueDataObject: any[] = [];
  alreadyWatched = [];
  alreadyWatchedTmp = [];
  alreadyDataObject: any[] = [];
  currentUser: User;
  user;
  id;
  // toWatch =  this.authService.currentUserValue.toWatchList;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private route: ActivatedRoute,
    private movieService: MoviesService) {
  }


  board: Board;

  ngOnInit(): void {
    console.log('this id', this.authService.currentUserValue.id);
    // tslint:disable-next-line: max-line-length
    this.refresh();

  }
  refresh() {
    this.userService.getById(this.authService.currentUserValue.id).pipe(first())
      .subscribe(data => {
        this.user = data;
        this.toWatchTmp = this.user.toWatchList;
        this.continueTmp = this.user.continue;
        this.alreadyWatchedTmp = this.user.alreadyWatched;
        this.findMovieTitleToWatch();
        this.findMovieTitleContinue();
        this.findMovieTitleAlreadyWatched();
        this.board = new Board('Movies', [
          new Column('To watch', this.toWatchDataObject),
          new Column('Continue', this.continueDataObject),
          new Column('Already watched', this.alreadyDataObject)
        ]);
      },
        error => {
          console.log(error);
        });

  }

  findMovieTitleToWatch() {
    for (let i = 0; i < this.toWatchTmp.length; i++) {
      this.movieService.getById(this.toWatchTmp[i]).pipe(first()).subscribe(
        data => {
          this.toWatch.push(data);
          this.fillToWatch();

        },
        error => {
          console.log(error);
        });
    }

  }

  findMovieTitleContinue() {
    for (let i = 0; i < this.continueTmp.length; i++) {
      this.movieService.getById(this.continueTmp[i]).pipe(first()).subscribe(
        data => {
          this.continue.push(data);
          this.fillContinue();

        },
        error => {
          console.log(error);
        });
    }

  }
  findMovieTitleAlreadyWatched() {
    for (let i = 0; i < this.alreadyWatchedTmp.length; i++) {
      this.movieService.getById(this.alreadyWatchedTmp[i]).pipe(first()).subscribe(
        data => {
          this.alreadyWatched.push(data);
          this.fillAlreadyWatched();

        },
        error => {
          console.log(error);
        });
    }

  }
  fillToWatch() {
    for (let i = 0; i < this.toWatch.length; i++) {
      if ((this.toWatchDataObject.includes(this.toWatch[i].Title))) {
        console.log(true);
      } else {
        this.toWatchDataObject.push(this.toWatch[i].Title);
      }

    }
  }
  fillContinue() {
    for (let i = 0; i < this.continue.length; i++) {
      if ((this.continueDataObject.includes(this.continue[i].Title))) {
        console.log(true);
      } else {
        this.continueDataObject.push(this.continue[i].Title);
      }

    }
  }
  fillAlreadyWatched() {
    for (let i = 0; i < this.alreadyWatched.length; i++) {
      if ((this.alreadyDataObject.includes(this.alreadyWatched[i].Title))) {
        console.log(true);
      } else {
        this.alreadyDataObject.push(this.alreadyWatched[i].Title);
      }

    }
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.container.data,  event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      console.log("Event container", event.container);
      console.log("Details", event.container.data, event.previousIndex, event.currentIndex);
      if (event.container.id === 'cdk-drop-list-0') {
        this.toWatch = JSON.parse(localStorage.getItem('toWatch'));
        console.log("this towatch", event.container.data[event.previousIndex]);
        this.toWatch.push(event.container.data[event.previousIndex]);
        localStorage.setItem('toWatch', JSON.stringify(this.toWatch));
      }
      if (event.container.id === 'cdk-drop-list-1') {
        this.toWatch = JSON.parse(localStorage.getItem('toWatch'));
        console.log("this towatch", event.container.data[event.previousIndex]);
        this.toWatch.push(event.container.data[event.previousIndex]);
        localStorage.setItem('toWatch', JSON.stringify(this.toWatch));
      }
    }

  }

  navigate() {
    this.router.navigate(['/login']);
  }

}

