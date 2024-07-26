import { Component } from '@angular/core';
import { ListpostComponent } from '../listpost/listpost.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListpostComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
