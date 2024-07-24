import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos = [
    { id: 1, name: 'Faire les courses', status: 'in-progress' },
    { id: 2, name: 'Finir le projet', status: 'completed' },
    { id: 3, name: 'Appeler le médecin', status: 'in-progress' },
    { id: 4, name: 'Nettoyer la maison', status: 'completed' },
  ]
  constructor() { }

  addNewToto(newTodoName:string){
    let id = this.todos.length+1;
    let newTodo = {id: id, name: newTodoName, status: 'in-progress'}
    this.todos.push(newTodo);
  }
}
