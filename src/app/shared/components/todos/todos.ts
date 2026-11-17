import { Component, input, output } from '@angular/core';
import { Itodo } from '../../model/Itodo';
import {MatButtonModule} from '@angular/material/button';
import { JsonPipe } from '@angular/common';


@Component({
  imports: [MatButtonModule ],
  selector: 'app-todos',
  styleUrl: './todos.scss',
  templateUrl: './todos.html',
})
export class Todos {

  todoData = input<Itodo[]>([]);
  emitTodoForUpdate = output<Itodo>();
  emitReomveId = output<number>();

  onEditTodo(todo : Itodo){
    this.emitTodoForUpdate.emit(todo);

  }

  onRemoveTodo(id : number){
  this.emitReomveId.emit(id);

  }
}
