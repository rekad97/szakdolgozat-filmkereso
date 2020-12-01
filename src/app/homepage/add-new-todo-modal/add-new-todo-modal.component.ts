import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoService } from 'app/shared/todo/todo.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-new-todo-modal',
  templateUrl: './add-new-todo-modal.component.html',
  styleUrls: ['./add-new-todo-modal.component.css']
})
export class AddNewTodoModalComponent implements OnInit {

  formControls: Record<keyof any, FormControl> = {
    title: new FormControl(''),
    desc: new FormControl(''),
  };

  todoForm = new FormGroup(this.formControls);
  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
  }

  create() {
    this.todoService.create(this.todoForm.value).pipe(first())
    .subscribe(data => {
      console.log(data);
      },
      error => {
        console.log(error);
      });
}

}
