import { Todo } from './../../models/todo';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-show',
  templateUrl: './todo-show.component.html',
  styleUrls: ['./todo-show.component.css']
})
export class TodoShowComponent implements OnInit {

  todo: Todo;
  constructor(private todoService: TodoService) { }

  ngOnInit() {

    //this.todoService.getOne().subscribe(res => this.todo = res)
  }

}
