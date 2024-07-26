import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PostModel } from '../postModel';
import { CommonModule } from '@angular/common';
import { SinglepostComponent } from '../singlepost/singlepost.component';

@Component({
  selector: 'app-post-user',
  standalone: true,
  imports: [CommonModule, SinglepostComponent],
  templateUrl: './post-user.component.html',
  styleUrl: './post-user.component.css'
})
export class PostUserComponent implements OnInit{
  userPost!: PostModel[];
  postEmpty:boolean =  true;
  constructor(private userService: UserService){}

  ngOnInit(): void {
      this.userService.getUserPosts().subscribe({
        next: (response) => {
          this.userPost = response;
          if(response.length != 0){
            this.postEmpty = false;
          }
        }, 
        error: (error) => {
          console.log(error);
        }
      })
  }
}
