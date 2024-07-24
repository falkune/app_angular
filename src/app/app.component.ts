import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { HeaderComponent } from './header/header.component';
import { TodolistComponent } from './todolist/todolist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MonComposantComponent, HeaderComponent, TodolistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
