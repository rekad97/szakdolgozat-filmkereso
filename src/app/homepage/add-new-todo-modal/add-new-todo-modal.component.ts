import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'app/shared/auth_and_register/auth.service';
import { TodoService } from 'app/shared/todo/todo.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-new-todo-modal',
  templateUrl: './add-new-todo-modal.component.html',
  styleUrls: ['./add-new-todo-modal.component.css']
})
export class AddNewTodoModalComponent implements OnInit {

  @Output() listChanged = new EventEmitter<any>();
  formControls: Record<keyof any, FormControl> = {
    userId: new FormControl(this.authService.currentUserValue.id),
    title: new FormControl(''),
    desc: new FormControl(''),
  };

  todoForm = new FormGroup(this.formControls);
  constructor(
    private todoService: TodoService,
    private authService: AuthService,
    private dialogRef: MatDialogRef<AddNewTodoModalComponent>
  ) { }

  ngOnInit(): void {
  }

  create() {
    this.todoService.create(this.todoForm.value).pipe(first())
    .subscribe(data => {
      console.log("data", data);
      },
      error => {
        console.log(error);
      });

      this.dialogRef.close(this.todoForm.value);

      this.dialogRef.afterClosed().subscribe(res => this.listChanged.emit(res));
}

}
