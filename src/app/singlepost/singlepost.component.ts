import { Component, Input } from '@angular/core';
import { PostModel } from '../postModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singlepost',
  standalone: true,
  imports: [],
  templateUrl: './singlepost.component.html',
  styleUrl: './singlepost.component.css'
})
export class SinglepostComponent {
  @Input()
  post!: PostModel;

  constructor(private router: Router){}

  showDetails(){
    this.router.navigateByUrl(`details/${this.post.id}`);
  }
}
