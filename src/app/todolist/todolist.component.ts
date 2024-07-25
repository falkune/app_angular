import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { TodoModel } from '../todoModel';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  todos: TodoModel[];
  
  // injecter le TodoService dans le composant 
  constructor(private todoService: TodoService){
    // i itialisation de la propriete todos avec le tableau todos qui provien de TodoService
    this.todos = this.todoService.todos;
  }
  
  // methode qui permet d'ajouter une todo cette methode fait appel a une methode addNewTodo qui se trouve dans le TodoService
  addTodo(todo:string){
    // appel de la methode addNewTodo
    this.todoService.addNewTodo(todo);
  }
}
