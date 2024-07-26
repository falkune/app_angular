import { Component,OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PostModel } from '../postModel';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{

  postInfos!: PostModel;

  // constructeur
  constructor(private userService: UserService, private router: ActivatedRoute, private route: Router){}

  ngOnInit(): void {
    // appel de la methode permettant de recuperer les infos du post
    this.userService.getPostById(this.router.snapshot.params['id']).subscribe({
      next: (response) => {
        this.postInfos = response;
        // console.log(this.postInfos);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  // methode pour supprimer un post
  deletePost(){
    // appel a la methode pour supprimer un post
    this.userService.deletePost(this.postInfos.id).subscribe({
      next: (response) => {
        // console.log(response);
        this.route.navigateByUrl('/');
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  // methode pour modifier un post
  updatePost(){

  }
}
