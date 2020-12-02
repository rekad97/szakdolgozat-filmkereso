import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDo } from 'app/models/todo';
import { User } from 'app/models/user';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ToDo[]>(`http://localhost:3000/todos`);
  }
  getById(id) {
    return this.http.get(`http://localhost:3000/todos/${id}`);
  }

  create(todo: ToDo) {
    return this.http.post(`http://localhost:3000/todos/create`, todo);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:3000/todos/${id}`);
  }
}
