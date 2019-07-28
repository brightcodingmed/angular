import { Todo } from './../../models/todo';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  myTodo: Todo = {
    content: '',
    date: new Date(),
    active: 0
  }

  todos: Todo[] = [];
  image = "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/NoO0UpFmSlqYIujQ6Gta";
  constructor(private todoService: TodoService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.getMessage();
  }

  getMessage() {
    this.todoService.getWelcome().subscribe((res: Todo[]) => {
      this.todos = res;
    })
  }
delete(id){


  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this imaginary file!',
    type: 'question',
    showCancelButton: true,
    confirmButtonText: 'Ok',
    cancelButtonText: 'Annuler'
  }).then((result) => {
    if (result.value) {

      this.todoService.deleteTodo(id).subscribe(()=>{
        //this.todos.splice(index, 1);

        this.todos = this.todos.filter((todo) => todo.id != id);

        this.flashMessage.show('Tod is delete Successfuly', {
          cssClass: 'alert-info',
          timer: 5000
        })
      },
      (err) => {
       
        this.flashMessage.show(err.message, {
          cssClass: 'alert-warning',
          timer: 5000
        })
      })

      // Swal.fire({
      //   title: 'la tache a été supprimé!',
      //   text: 'cette tache est supprimé avec succes',
      //   type: 'success',
      //   timer: 3000
      // })

    }
  })
 
}

  toggleActive(todo) {
    todo.active = !todo.active
  }

  addTodo() {
    
    this.myTodo = {
      id: this.todos.length + 1,
      ...this.myTodo
    }

    this.todos = [this.myTodo, ...this.todos];

    this.myTodo = {
      content: '',
      date: new Date(),
      active: 0
    }

  }

}
