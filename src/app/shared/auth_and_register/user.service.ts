import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {User} from '../../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    console.log('proba getAll');
    return this.http.get<User[]>(`http://localhost:3000/users`);
  }

  getById(id) {
    console.log('proba getId');
    return this.http.get(`http://localhost:3000/users/${id}`);
  }

  register(user: User) {
    console.log('proba register 2');
    return this.http.post(`http://localhost:3000/users/register`, user);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }

  saveToWatch(movie: any) {
    return this.http.post(`http://localhost:3000/users/towatch`, movie);
  }

  update(id, movie: any) {
    console.log('update ideér');
    return this.http.put(`http://localhost:3000/users/${id}`, movie);
  }
}
