import { Todo } from './../../models/todo';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  image = "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/NoO0UpFmSlqYIujQ6Gta";
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getMessage();
  }

  getMessage() {
    this.todoService.getWelcome().subscribe((res: Todo[]) => {
      this.todos = res;
    })
  }

}
