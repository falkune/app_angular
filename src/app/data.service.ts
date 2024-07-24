import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: string[] = ["liste 1", "list 2", "list 3"];
  constructor() { }

  addNewItem(item:string){
    this.items.push(item);
  }
}
