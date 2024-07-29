import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PostComponent } from './post/post.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { PostUserComponent } from './post-user/post-user.component';

export const routes: Routes = [
    // Route pour afficher le composant HomeComponent
    { path: "", component: HomeComponent },
    // Route pour afficher le composant LoginComponent
    { path: 'login', component: LoginComponent },
    // Route pour afficher le composant RegisterComponent
    { path: 'register', component: RegisterComponent },
    // Route pour afficher le composant PostComponent
    { path: 'add-post', component: PostComponent },
    // Route pour afficher le composant DetailsComponent
    { path : 'details/:id', component: DetailsComponent },
    // Route pour afficher le composant UpdateComponent
    { path: 'update/:id', component: UpdateComponent },
    // Route pour afficher le composant PostUserComponent
    { path: 'my-post', component: PostUserComponent }
];
