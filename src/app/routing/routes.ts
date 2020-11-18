import {Routes} from '@angular/router';
import {RegisterComponent} from '../register/register.component';
import {MypageComponent} from '../mypage/mypage.component';
import {MyProfileComponent} from '../my-profile/my-profile.component';
import {MovieDetailsComponent} from '../movie-details/movie-details.component';
import {MoviesComponent} from '../movies/movies.component';
import {HomepageComponent} from '../homepage/homepage.component';
import {UserHomePageComponent} from '../user-home-page/user-home-page.component';
import { MainLayoutComponent } from 'app/main-layout/main-layout.component';
import { MovieCardComponent } from 'app/homepage/movie-card/movie-card.component';
export const appRoutes: Routes = [
  {
    path: 'signup', component: RegisterComponent,
    children: [{path: '', component: RegisterComponent}]
  },
  // {
  //   path: 'login', component: LoginComponent
  // },
  {
    path: 'mypage', component: MypageComponent
  },
   {
    path: 'home', component: HomepageComponent
  },
  {
    path: 'myprofile', component: MyProfileComponent
  },
  {
    path: 'movies', component: MoviesComponent
  },
  {
    path: 'home_user', component: UserHomePageComponent
  },
  {
    path: 'card', component: MovieCardComponent
  },
  {
    path: '', redirectTo: '/signup', pathMatch: 'full'
  },
  {
    path: 'movie/:id',  component: MovieDetailsComponent
  },
  {
    path: '',  component: MainLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren:() => import('../login/login.module').then((m) => m.LoginModule),
      }
    ]
  },
];
