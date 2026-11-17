import { Component, OnInit } from '@angular/core';
import { TodoForm } from '../todo-form/todo-form';
import { Todos } from '../todos/todos';
import { Itodo } from '../../model/Itodo';
import { todoData } from '../../data/Todos';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sanckbar } from '../../service/sanckbar';

@Component({
  imports: [TodoForm, Todos],
  selector: 'app-todo-dashboard',
  styleUrl: './todo-dashboard.scss',
  templateUrl: './todo-dashboard.html',
})
export class TodoDashboard implements OnInit {
  todoArr!: Itodo[];
  newObj!: Itodo;
  editTodo!: Itodo;

  ngOnInit(): void {
    this.todoArr = todoData;
  }

  constructor(private snackbarService : Sanckbar){

  }

  getNewTodo(todo: Itodo) {
    this.todoArr = [...this.todoArr, todo];
    this.snackbarService.openSnackBar('New todo is added in database..!')
  }

  getEditTodo(todo: Itodo) {
    this.editTodo = todo;
  }

  getUpdatedObj(updateTodo: Itodo) {
    this.todoArr = this.todoArr.map((todo) =>
      todo.todoId === updateTodo.todoId ? updateTodo : todo,
    );
     this.snackbarService.openSnackBar('Todo is updated successfully..!')
  }

  getRemoveId(id: number) {
    let GETINDEX =  this.todoArr.findIndex(t => t.todoId === id);
    this.todoArr.splice(GETINDEX,1);
    this.snackbarService.openSnackBar(`Todo with id ${id} is removed successfully..!`)
  }
}
