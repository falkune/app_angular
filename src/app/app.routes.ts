import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PostComponent } from './post/post.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { PostUserComponent } from './post-user/post-user.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'add-post', component: PostComponent },
    { path : 'details/:id', component: DetailsComponent },
    { path: 'update/:id', component: UpdateComponent },
    { path: 'my-post', component: PostUserComponent }
];
