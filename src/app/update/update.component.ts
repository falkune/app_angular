import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { PostModel } from '../postModel';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  postForm!: FormGroup;
  idPost!:number;
  data!:PostModel;

  constructor(private formBuilder: FormBuilder, private router: ActivatedRoute, private userService: UserService){
    this.postForm = this.formBuilder.group({
      titre: [ '', Validators.required],
      commentaire: [ '', Validators.required]
    })
  }

  ngOnInit(): void {
    this.userService.getPostById(this.router.snapshot.params['id']).subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  onSubmit(){
    if(this.postForm.valid){
      // appel de la methode pour sauvegarder les modification
      this.data.titre = this.postForm.value.titre;
      this.data.commentaire = this.postForm.value.commentaire;

      this.userService.updatePost(this.data).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        }
      })
    }else{
      console.log("le formulaire n'est pas valide");
    }
  }
}
