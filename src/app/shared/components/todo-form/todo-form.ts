import { Component, effect, input, output, signal } from '@angular/core';
import { Itodo } from '../../model/Itodo';
import { form, FormField } from '@angular/forms/signals';
import {MatButtonModule} from '@angular/material/button';

@Component({
  imports: [FormField ,MatButtonModule],
  selector: 'app-todo-form',
  styleUrl: './todo-form.scss',
  templateUrl: './todo-form.html',
})
export class TodoForm {

  todoModel = signal<Itodo>(
    {
      todoId : 0,
        todoName : '',
        isCompleted : false
    }
  );


  isInEditMode : boolean = false;
  getEditTodo = input<Itodo>()

  todoForm = form(this.todoModel);
  emitNewTodo = output<Itodo>();
  emitUpdatedTdod =  output<Itodo>();


  onAddTodo(eve : Event){
    eve.preventDefault()
    let NEW_TODO : Itodo = {
      ...this.todoModel(),
      todoId : Date.now()
    }
    this.todoModel.set({
      todoId : 0,
        todoName : '',
        isCompleted : false
    })
    this.emitNewTodo.emit(NEW_TODO);

  }


 constructor(){
  effect(()=>{
    const todo = this.getEditTodo();
    if(todo){
      this.todoModel.set({
        ...todo,
      });
      this.isInEditMode = true
    }
  })
 }

 onUpdateTodo(){
  let UPDATED_TODO : Itodo = {
    ...this.todoModel(),
    todoId : this.getEditTodo()!.todoId
  };
   this.todoModel.set({
      todoId : 0,
        todoName : '',
        isCompleted : false
    });
    this.emitUpdatedTdod.emit(UPDATED_TODO);
    this.isInEditMode = false;

 }
}
