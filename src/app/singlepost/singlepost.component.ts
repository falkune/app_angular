import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-singlepost',
  standalone: true,
  imports: [],
  templateUrl: './singlepost.component.html',
  styleUrl: './singlepost.component.css'
})
export class SinglepostComponent {
  @Input()
  post!: object;



  showDetails(){
    console.log(this.post);
  }
}
