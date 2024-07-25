import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  // l'objet formulaire 
  postForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService){
    this.postForm = this.formBuilder.group({
      titre: ['', Validators.required],
      commentaire: ['', Validators.required]
    })
  }

  // methode onSubmit exeter au click sur le bouton
  onSubmit(){
    // verifier si le formulaire est bien valide
    if(this.postForm.valid){
      // appel de de la methode savePoste definie dans le userService
      this.userService.savePost(this.postForm.value).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (error)=>{
          console.log(error);
        }
      })
    }
  }

}
