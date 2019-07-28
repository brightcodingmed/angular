import { TodoShowComponent } from './components/todo-show/todo-show.component';
import { TodosComponent } from './components/todos/todos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: '/todos', pathMatch: 'full' },
  { path: "todos", component: TodosComponent },
  { path: "todos/:idTodo", component: TodoShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
