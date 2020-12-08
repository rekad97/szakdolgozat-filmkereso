import { Routes } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { MypageComponent } from '../mypage/mypage.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { MoviesComponent } from '../movies/movies.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { MainLayoutComponent } from 'app/main-layout/main-layout.component';
import { Auth } from '../../../auth';
export const appRoutes: Routes = [
  // {
  //   path: 'signup', component: RegisterComponent,
  //   children: [{ path: '', component: RegisterComponent }],
  // },
  // {
  //   path: 'login', component: LoginComponent
  // },
  // {
  //   path: 'mypage', component: MypageComponent,
  // },
  //  {
  //   path: 'home', component: HomepageComponent
  // },
  // {
  //   path: 'myprofile', component: MyProfileComponent
  // },
  // {
  //   path: 'movies', component: MoviesComponent
  // },
  {
    path: '', redirectTo: '/signup', pathMatch: 'full'
  },
  // {
  //   path: 'movie/:id',  component: MovieDetailsComponent
  // },
  {
    path: '', component: MainLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'home',
        loadChildren: () => import('../homepage/homepage.module').then((m) => m.HomepageModule),
      },
      {
        path: 'movie/:id',
        loadChildren: () => import('../movie-details/movie-details.module').then((m) => m.MovieDetailsModule),
      },
      {
        path: 'movies',
        loadChildren: () => import('../movies/movies.module').then((m) => m.MoviesModule),
      },
      {
        path: 'myprofile',
        loadChildren: () => import('../my-profile/my-profile.module').then((m) => m.MyProfileModule),
      },
      {
        path: 'mypage',
        loadChildren: () => import('../mypage/mypage.module').then((m) => m.MypageModule),
      },
      {
        path: 'signup',
        loadChildren: () => import('../register/register.module').then((m) => m.RegisterModule),
      },
    ]
  },
];
