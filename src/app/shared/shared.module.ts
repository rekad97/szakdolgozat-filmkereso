import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieDetailsService} from '../shared/movie/movie-details.service';
import { MoviesComponent } from '../movies/movies.component';
import {HomepageComponent} from '../homepage/homepage.component';
import { UserHomePageComponent } from '../user-home-page/user-home-page.component';
import { RegisterComponent } from 'app/register/register.component';
import { NotificationComponent } from 'app/notification/notification.component';
import { NavbarComponent } from 'app/navbar/navbar.component';
import { MypageComponent } from 'app/mypage/mypage.component';
import { NavbarAfterComponent } from 'app/navbar-after/navbar-after.component';
import { MyProfileComponent } from 'app/my-profile/my-profile.component';
import { MovieDetailsComponent } from 'app/movie-details/movie-details.component';
import { MovieCardComponent } from '../homepage/movie-card/movie-card.component';
import { MainLayoutComponent } from 'app/main-layout/main-layout.component';
import { MoviesService } from './movie/movies.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomepageComponent,
    //LoginComponent,
    RegisterComponent,
    NotificationComponent,
    NavbarComponent,
    MypageComponent,
    NavbarAfterComponent,
    MyProfileComponent,
    MovieDetailsComponent,
    MoviesComponent,
    UserHomePageComponent,
    MainLayoutComponent,
    MovieCardComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatTabsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    DragDropModule,
   
    MatTableModule,
  ],
  exports: [
    HomepageComponent,
    //LoginComponent,
    RegisterComponent,
    NotificationComponent,
    NavbarComponent,
    MypageComponent,
    NavbarAfterComponent,
    MyProfileComponent,
    MovieDetailsComponent,
    MoviesComponent,
    MovieCardComponent,
    UserHomePageComponent,
    MainLayoutComponent,
    FormsModule, 
    ReactiveFormsModule,
    MatTabsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    DragDropModule,
   
    MatTableModule,
  ],
  providers: [
    MoviesService,
    MovieDetailsService
  ]
})
export class SharedModule { }
