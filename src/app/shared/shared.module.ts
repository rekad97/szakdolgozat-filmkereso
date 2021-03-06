import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieDetailsService} from '../shared/movie/movie-details.service';
import { MoviesComponent } from '../movies/movies.component';
import {HomepageComponent} from '../homepage/homepage.component';
import { RegisterComponent } from 'app/register/register.component';
import { NavbarComponent } from 'app/navbar/navbar.component';
import { MypageComponent } from 'app/mypage/mypage.component';
import { MyProfileComponent } from 'app/my-profile/my-profile.component';
import { MovieDetailsComponent } from 'app/movie-details/movie-details.component';
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
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { QRCodeModule } from 'angularx-qrcode';
import { QrCodeModalComponent } from '../my-profile/qr-code-modal/qr-code-modal.component';
import { AddNewTodoModalComponent } from '../homepage/add-new-todo-modal/add-new-todo-modal.component';
import { TodoCardComponent } from '../homepage/todo-card/todo-card.component';

@NgModule({
  declarations: [
    // HomepageComponent,
    // RegisterComponent,
    TodoCardComponent,
    NavbarComponent,
    // MypageComponent,
    // MyProfileComponent,
    // MovieDetailsComponent,
    // MoviesComponent,
    MainLayoutComponent,
    QrCodeModalComponent,
    AddNewTodoModalComponent
    
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
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    QRCodeModule
  ],
  exports: [
    // HomepageComponent,
    // RegisterComponent,
    NavbarComponent,
    // MypageComponent,
    // MyProfileComponent,
    // MovieDetailsComponent,
    // MoviesComponent,
    TodoCardComponent,
    MainLayoutComponent,
    QrCodeModalComponent,
    AddNewTodoModalComponent,
    FormsModule, 
    MatSnackBarModule,
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
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    MoviesService,
    MovieDetailsService
  ],
  entryComponents: [QrCodeModalComponent, AddNewTodoModalComponent]
})
export class SharedModule { }
