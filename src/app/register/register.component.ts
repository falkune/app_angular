import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  // initialisation de l'attribut registerForm
  // correspond a l'ensemble des valeurs des champs du formulaire sous forme d'objet
  registerForm!: FormGroup;

  
  constructor(private formBuilder: FormBuilder, private userService: UserService){ // injection du formBuilder dans le constructeur
    this.registerForm = this.formBuilder.group({
      // Champ email avec deux validateurs requis et format email
      email: [ '', [Validators.required, Validators.email]],
      // Champ password avec deux validateurs requis et longueur minimale de 6 caracteres
      password: ['', [Validators.required, Validators.minLength(6)]],
      // Champ nom avec un validateur requis 
      nom: ['', Validators.required],
      // Champ prenom avec un validateur requis
      prenom: ['', Validators.required]
    })
  }

  onSubmit(){
    // verifier que le formulaire est valide (les donnees saisies sont valides c a d respecte bien les validations dans le constructeur)
    if(this.registerForm.valid){
      // appel du service adequat
      this.userService.addUser(this.registerForm.value).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.error('Login error', error.error);
        }
      })
    }

  }
}
