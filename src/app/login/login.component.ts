import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userSevice: UserService){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [ '', [Validators.required, Validators.minLength(6)]]
    })
  }

  // methode faisant appel login definie dans le UserService
  submit(){
    if(this.loginForm.valid){
      this.userSevice.login(this.loginForm.value).subscribe({
        next : (response) => {
          // console.log(response);
          // enregistrer le token dan le localStorage
          localStorage.setItem('token', response.data);
          // console.log(localStorage.getItem('token'));
        },
        error: (error) => {
          console.log(error);
        }
      })

    }
  }
}
