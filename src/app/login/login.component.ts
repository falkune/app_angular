import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // Declaration de l'attribut loginForm de type FormGroup
  loginForm: FormGroup;

  // Injection des services FormBuilder, UserService et Router dans le constructeur
  constructor(private formBuilder: FormBuilder, private userSevice: UserService, private router: Router){
    // Initialisation du groupe de formulaires loginForm avec des controles de formulaire
    this.loginForm = this.formBuilder.group({
      // Champ email avec deux validateurs requis et format email
      email: ['', [Validators.required, Validators.email]],
      // Champ password avec deux validateurs requis et longueur minimale de 6 caracteres
      password: [ '', [Validators.required, Validators.minLength(6)]]
    })
  }

  // methode faisant appel login definie dans le UserService
  submit(){
    if(this.loginForm.valid){
      this.userSevice.login(this.loginForm.value).subscribe({
        next : (response) => {
          // enregistrer le token dans le localStorage
          localStorage.setItem('token', response.data);
          // redirection vers http://localhost:2400 (le composant home)
          this.router.navigateByUrl('/')
        },
        error: (error) => {
          console.log(error);
        }
      })

    }
  }
}
