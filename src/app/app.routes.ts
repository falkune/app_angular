import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PostComponent } from './post/post.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'add-post', component: PostComponent },
    { path : 'details/:id', component: DetailsComponent }
];
