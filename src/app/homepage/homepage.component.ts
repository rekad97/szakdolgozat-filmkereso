import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../shared/movie/movies.service';
import {Router} from '@angular/router';
import {Movie} from '../models/movie';
import {MovieDetailsService} from '../shared/movie/movie-details.service';
import { AuthService } from 'app/shared/auth_and_register/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { AddNewTodoModalComponent } from './add-new-todo-modal/add-new-todo-modal.component';
import { UserService } from 'app/shared/auth_and_register/user.service';
import { first } from 'rxjs/operators';
import { User } from 'app/models/user';
import { TodoService } from 'app/shared/todo/todo.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  isLoggedIn: boolean;
  todoIds;
  todoDatas = [];
  user;
  
  constructor(
    private authService: AuthService,
    private todoService: TodoService,
    private userService: UserService,
    private dialog: MatDialog
    ) {}
  ngOnInit(): void {
   this.refresh();

  }

  refresh() {
    this.userService.getById(this.authService.currentUserValue.id).pipe(first())
    .subscribe(data => {
      this.user = data;
      this.todoIds = this.user.toDoList;
      console.log('todo', this.todoIds);
      this.fillData();
  });

}

fillData() {
  for(let i = 0; i < this.todoIds.length; i++){
    const id = this.todoIds[i];
    this.todoService.getById(id).pipe(first()).subscribe(
      data => {
        this.todoDatas.push(data);
      console.log(this.todoDatas);
      }
    )
  }
}
  openDialog() {
    const dialogRef = this.dialog.open(AddNewTodoModalComponent, {
      width: '500px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log("itt meghívódik az after subscribe", res);
      if(res.title !== '' || res.desc !== '') {
        this.todoDatas.push(res);

      }
    }
    );
  }

  listChanged(event) {
    this.refresh();
    console.log("event", event);
  }

}
