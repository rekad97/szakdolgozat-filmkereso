import {EventEmitter, Injectable} from '@angular/core';
import {MoviesService} from './movies.service';
import {ActivatedRoute, ActivatedRouteSnapshot, Params, Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth_and_register/auth.service';
import {MovieService} from './movie.service';
import {UserService} from '../auth_and_register/user.service';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {
  toWatch: any[] = [];
  toWatchToSend: any;
  sharedToWatch: any;
  continue: any[];
  alreadyWatched: any[];
result: any;
  id: number;
 resultToSend: any = undefined;
shared: any;
  constructor(private authService: AuthService, private userService: UserService, private http: HttpClient, private movieService: MoviesService, private route: ActivatedRoute, private movie: MovieService, private router: Router) {
    console.log(this.result);

  }
$result = new EventEmitter();
   async init() {
   await this.movieService.searchMovieByID(this.getMovieId()).toPromise().then((result) => {
    //  console.log(this.getMovieId());
      this.result = [result];
      this.resultToSend =  new BehaviorSubject(this.result);
      this.shared = this.resultToSend.asObservable();
      console.log(this.resultToSend);
      console.log(this.resultToSend._value[0].Title);
    });
  }
  sendData() {
   // this.resultToSend =  new BehaviorSubject(this.result);
   // this.shared = this.resultToSend.asObservable();
    return this.resultToSend;
  }
  setData() {
    this.resultToSend = this.result;

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
     console.log(this.userService.saveToWatch(this.result[0]));
console.log(this.result);
     this.router.navigate(['/mypage']);
   // this.toWatch.push(this.result);
   // this.toWatchToSend = new BehaviorSubject(this.toWatch);
  // this.sharedToWatch = this.toWatchToSend.asObservable();
 //  console.log(this.sharedToWatch);
  //  console.log(this.toWatch[0]);
       }


nextResult(result: any) {
    this.resultToSend.next(result);
}
  getResult(): Observable<any>{
    return this.resultToSend.asObservable();
  }
}
