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

  addNewTodo(newTodoName:string){
    // calcul de l'id en fonction du nombre d'element que contient le tableau
    let id = this.todos.length+1;
    // definition de l'objet todo
    let newTodo = {id: id, name: newTodoName, status: 'in-progress'}
    // ajout de la todo dans le tableau
    this.todos.push(newTodo);
  }
}
