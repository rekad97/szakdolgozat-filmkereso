import { Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'app/shared/auth_and_register/auth.service';
import { UserService } from 'app/shared/auth_and_register/user.service';
import { TodoService } from 'app/shared/todo/todo.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {

  @Input() title: string;
  @Input() desc: string;
  @Input() id: string;
  // @Output () changed = new EventEmitter<any>();

  
  user;
  list;
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private toDoService: TodoService
  ) { }

  ngOnInit(): void {
    this.userService.getById(this.authService.currentUserValue.id).pipe(first())
    .subscribe(data => {
      this.user = data;
      console.log(this.user);
    })
  }

  refresh() {
    this.userService.getById(this.authService.currentUserValue.id).pipe(first())
    .subscribe(data => {
      this.user = data;
      console.log('this user', this.user);
  });
}

  delete(event){
      for(let i = 0; i < this.user.toDoList.length; i++) {
        console.log(event);
        console.log(this.user.toDoList);
        console.log(this.user.toDoList[i] );
        console.log(event.id);
        if(this.user.toDoList[i] == event.id) {
        
          this.toDoService.delete(this.user.toDoList[i]).pipe(first()).subscribe(res => {
            console.log('eredmeny', this.user.toDoList, res);
            this.user.toDoList.splice(i, 1);
            console.log(this.user.toDoList);
            this.userService.updateToDoList(this.authService.currentUserValue.id, this.user.toDoList).subscribe(
              res => console.log(res)
            );
          })
        }
      }
      this.reload();
  }

  reload() {
    window.location.reload();

  }
}
