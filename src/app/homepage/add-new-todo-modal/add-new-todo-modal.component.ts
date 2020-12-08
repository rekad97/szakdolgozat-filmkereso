import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    title: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required),
  };

  todoForm = new FormGroup(this.formControls);
  constructor(
    private todoService: TodoService,
    private authService: AuthService,
    private dialogRef: MatDialogRef<AddNewTodoModalComponent>,
    private snackBar: MatSnackBar

  ) { }

  ngOnInit(): void {
  }

  create() {
    if (this.todoForm.valid) {
      this.todoService.create(this.todoForm.value).pipe(first())
      .subscribe(data => {
        console.log('data', data);
        },
        error => {
          console.log(error);
        });

      this.dialogRef.close(this.todoForm.value);

      // this.dialogRef.afterClosed().subscribe(res => {
      //     this.listChanged.emit(res);
      //     this.refresh();
      //   });
    } else if (!this.todoForm.valid) {
      this.snackBar.open('Form fields are required!', 'Close');
    }

 }
  

refresh() {
  window.location.reload();
}

cancel() {
  this.dialogRef.close();
}

}

