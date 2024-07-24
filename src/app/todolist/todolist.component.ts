import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { TodModel } from '../todoModle';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  todos: TodModel[];
  constructor(private todoService: TodoService){
    this.todos = this.todoService.todos;
  }
  
  addTodo(todo:string){
    this.todoService.addNewToto(todo);
  }
}
