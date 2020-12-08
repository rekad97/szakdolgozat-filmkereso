import { Component, OnInit, ViewChild } from '@angular/core';
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
import { MatMenuTrigger } from '@angular/material/menu';

export interface MovieObject {
  id: string;
  movie: string;
}

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
  movieObjectToWatch;
  movieObjectContinue;
  movieObjectAlreadyWatched;
  user;
  id;
  allIn = [];
  allIntoNavigate = [];
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
  async refresh() {
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
          this.movieObjectToWatch = {
            id: this.toWatchTmp[i], movie: data
          };
          this.toWatch.push(this.movieObjectToWatch);
          console.log(this.movieObjectToWatch);
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
          this.movieObjectContinue = {
            id: this.continueTmp[i], movie: data
          };
          this.continue.push(this.movieObjectContinue);
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
          this.movieObjectAlreadyWatched = {
            id: this.alreadyWatchedTmp[i], movie: data
          };

          console.log('movieObjectAlreadyWatched', this.movieObjectAlreadyWatched);

          this.alreadyWatched.push(this.movieObjectAlreadyWatched);
          this.fillAlreadyWatched();

        },
        error => {
          console.log(error);
        });
    }

  }
  fillToWatch() {
    for (let i = 0; i < this.toWatch.length; i++) {
      if ((this.toWatchDataObject.includes(this.toWatch[i].movie.Title))) {
        console.log(this.toWatch[i].movie.Title);
      } else {
        this.toWatchDataObject.push(this.toWatch[i].movie.Title);
      }

    }
  }
  fillContinue() {
    for (let i = 0; i < this.continue.length; i++) {
      if ((this.continueDataObject.includes(this.continue[i].movie.Title))) {
        console.log(true);
      } else {
        this.continueDataObject.push(this.continue[i].movie.Title);
      }

    }
  }
  fillAlreadyWatched() {
    for (let i = 0; i < this.alreadyWatched.length; i++) {
      if ((this.alreadyDataObject.includes(this.alreadyWatched[i].movie.Title))) {
        console.log(true);
      } else {
        this.alreadyDataObject.push(this.alreadyWatched[i].movie.Title);
      }

    }
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      console.log('Previous', event.previousContainer);
      console.log('Event container', event.container);
      console.log('Details', event.container.data, event.previousIndex, event.currentIndex);
      if (event.container.id === 'cdk-drop-list-0') {
        console.log('towatchba raktam', event.previousContainer.id);
        if (event.previousContainer.id === 'cdk-drop-list-1') {
          for (let i = 0; i < this.alreadyDataObject.length; i++) {

          }
        }
        // console.log("this towatch", event.container.data[event.previousIndex]);
        // this.toWatch.push(event.container.data[event.previousIndex]);
        // localStorage.setItem('toWatch', JSON.stringify(this.toWatch));
      }
      if (event.container.id === 'cdk-drop-list-1') {
        console.log('continueba raktam', event.previousContainer.id);
        // this.toWatch = JSON.parse(localStorage.getItem('toWatch'));
        // console.log("this towatch", event.container.data[event.previousIndex]);
        // this.toWatch.push(event.container.data[event.previousIndex]);
        // localStorage.setItem('toWatch', JSON.stringify(this.toWatch));
      }
    }

  }
  getAllMovies() {
    this.movieService.getAll().subscribe(
      res => {
        this.allIn = res;
        console.log(this.allIn);

      }
    );
  }

  save() {
    console.log(this.board);
    const toWatchIds = [];
    const continueIds = [];
    const alreadyWatchedIds = [];
    this.movieService.getAll().subscribe(
      res => {
        this.allIn = res;
        console.log(this.allIn);


        for (let i = 0; i < this.board.column.length; i++) {
          for (let k = 0; k < this.board.column[i].movies.length; k++) {
            console.log('switch előtt');
            switch (i) {
              case 0:
                for (let j = 0; j < this.allIn.length; j++) {
                  for (let m = 0; m < this.board.column[0].movies.length; m++) {
                    if (this.allIn[j].Title === this.board.column[0].movies[m]) {
                      if (!toWatchIds.find(x => x === this.allIn[j].id)) {
                        toWatchIds.push(this.allIn[j].id);
                        console.log('to watch ids', toWatchIds);
                      }
                    }
                  }
                }
                break;
              case 1:
                console.log('case 1');
                for (let j = 0; j < this.allIn.length; j++) {
                  // tslint:disable-next-line: prefer-for-of
                  for (let m = 0; m < this.board.column[1].movies.length; m++) {
                    if (this.allIn[j].Title === this.board.column[1].movies[m]) {
                      if (!continueIds.find(x => x === this.allIn[j].id)) {
                        continueIds.push(this.allIn[j].id);
                        console.log('continue ids', continueIds);
                      }
                    }
                  }
                }
                break;
              case 2:
                console.log('case 2');
                for (let j = 0; j < this.allIn.length; j++) {
                  for (let m = 0; m < this.board.column[2].movies.length; m++) {
                    if (this.allIn[j].Title === this.board.column[2].movies[m]) {
                      if (!alreadyWatchedIds.find(x => x === this.allIn[j].id)) {
                        alreadyWatchedIds.push(this.allIn[j].id);
                        console.log('already watched ids', alreadyWatchedIds);
                      }
                    }
                  }
                }
                break;
              default:
                break;
            }
          }

        }
        console.log('to watch id-s a végén', toWatchIds);
        this.userService.updateToWatch(this.authService.currentUserValue.id, toWatchIds).subscribe(res => {
          console.log(res);
        });
        this.userService.updateContinue(this.authService.currentUserValue.id, continueIds).subscribe(res => {
          console.log(res);
        });
        this.userService.updateAlreadyWatched(this.authService.currentUserValue.id, alreadyWatchedIds).subscribe(res => {
          console.log(res);
        });
      }
    );

  }

  navigateToDetails(item) {
    this.movieService.getAll().subscribe(
      res => {
        this.allIntoNavigate = res;
        for (let i = 0; i < this.allIntoNavigate.length; i++) {
          console.log('itt van', this.allIntoNavigate[i], item);

          if (item === this.allIntoNavigate[i].Title) {
            console.log('itt navigál', this.allIntoNavigate[i].imdbID);

            this.router.navigate(['/movie', this.allIntoNavigate[i].imdbID]);

          }
        }
      });
  }

  navigate() {
    this.router.navigate(['/login']);
  }

 delete(item) {
   let deletedId;
   let toWatchListDeleteTmp = [...this.user.toWatchList];
   let continueDeleteTmp = [...this.user.continue];
   let alreadyWatchedDeleteTmp = [...this.user.alreadyWatched];
   console.log('tmp', toWatchListDeleteTmp);
   
   this.movieService.getAll().subscribe(res => {
    this.allIn = res;
    console.log(res);
    for (let i = 0; i < this.allIn.length; i++) {
      if (this.allIn[i].Title === item) {
        deletedId = this.allIn[i].id;
      }
    }

    for(let i = 0; i < this.user.toWatchList.length; i++) {

      if(deletedId === this.user.toWatchList[i]) {
        console.log(this.user.toWatchList[i]);
  
        toWatchListDeleteTmp.splice(i, 1);
        console.log('deletedTmp', toWatchListDeleteTmp)
        this.userService.updateToWatch(this.authService.currentUserValue.id, toWatchListDeleteTmp).subscribe(res =>
          window.location.reload()
          );
      }
    }
  
    for(let i = 0; i < this.user.continue.length; i++) {

      if(deletedId === this.user.continue[i]) {
  
        continueDeleteTmp.splice(i, 1);
        this.userService.updateContinue(this.authService.currentUserValue.id, continueDeleteTmp).subscribe(res =>
          window.location.reload()
          );
      }
    }
  

    for(let i = 0; i < this.user.alreadyWatched.length; i++) {

      if(deletedId === this.user.alreadyWatched[i]) {
        alreadyWatchedDeleteTmp.splice(i, 1);
        this.userService.updateAlreadyWatched(this.authService.currentUserValue.id, alreadyWatchedDeleteTmp).subscribe(res =>
          window.location.reload()
          );
      }
    }
  });




 }


}

