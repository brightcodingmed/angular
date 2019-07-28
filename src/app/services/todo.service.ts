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
}
