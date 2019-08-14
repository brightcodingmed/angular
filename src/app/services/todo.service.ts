import { Todo } from './../models/todo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getWelcome() {
     return this.http.get("http://localhost:9090/todos");
  }

  getOne(id: number) {
    return this.http.get(`http://localhost:9090/todos/${id}`);
  }

  deleteTodo(id:number){
    return this.http.delete(`http://localhost:9090/todos/${id}`);
  }

  persist(todo: Todo) {
    return this.http.post('http://localhost:9090/todos', todo);
  }

  update(todo: Todo){
    return this.http.put(`http://localhost:9090/todos/${todo.id}`, todo);
  }

  updateActive(id: number, active: number) {
    return this.http.patch(`http://localhost:9090/todos/${id}`, {active})
  }
}
