import { Component, OnInit } from '@angular/core';
import { SinglepostComponent } from '../singlepost/singlepost.component';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listpost',
  standalone: true,
  imports: [SinglepostComponent, CommonModule],
  templateUrl: './listpost.component.html',
  styleUrl: './listpost.component.css'
})
export class ListpostComponent implements OnInit{
  // la propriete contenant la liste des posts
  listpost!:object[];
  // constructeur
  constructor(private userService: UserService){}

  // methode declancher au rendu du composant
  ngOnInit(): void {
    this.userService.getAllPost().subscribe({
      next: (response) => {
        this.listpost = response.list;
        console.log(this.listpost);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
