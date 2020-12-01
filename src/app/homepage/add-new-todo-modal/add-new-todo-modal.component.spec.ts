import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTodoModalComponent } from './add-new-todo-modal.component';

describe('AddNewTodoModalComponent', () => {
  let component: AddNewTodoModalComponent;
  let fixture: ComponentFixture<AddNewTodoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewTodoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTodoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
