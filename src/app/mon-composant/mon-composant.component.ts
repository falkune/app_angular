import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mon-composant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mon-composant.component.html',
  styleUrl: './mon-composant.component.css'
})
export class MonComposantComponent {
  color: string = "blue";
  isvisible:boolean = true;
  items: string[] = [];

  constructor(private dataService: DataService){
    this.items = this.dataService.items;
  }

  addItem(value:string){
    this.dataService.addNewItem(value);
  }
}
