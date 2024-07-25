import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder){
    this.postForm = this.formBuilder.group({
      titre: ['', Validators.required],
      commentaire: ['', Validators.required]
    })
  }

  // methode onSubmit exeter au click sur le bouton
  onSubmit(){
    
  }

}
