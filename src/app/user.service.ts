import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from './postModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // methode pour sauvegarder un utilisateur en faisant appel a l'api node js
  addUser(user:any): Observable<any>{
    let body = user;
    return this.http.post("http://localhost:3000/user/register", body);
  }

  // methode login qui connecte un user sur le site
  login(user:any): Observable<any>{
    let body = user;
    return this.http.post('http://localhost:3000/user/login', body);
  }
  // methode pour ajouter un post
  savePost(post: any): Observable<any> {
    let body = post;
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });

    return this.http.post('http://localhost:3000/post/add', body, {headers: headers});
  }
  // methode pour recuperer la liste des posts
  getAllPost(): Observable<any>{
    return this.http.get('http://localhost:3000/post/getAll');
  }

  // methode pour recuperer les infos d'un post
  getPostById(id:number): Observable<any>{
    return this.http.get(`http://localhost:3000/post/getpost/${id}`);
  }

  // methode pour supprimer un post
  deletePost(id: number): Observable<any>{
    return this.http.get(`http://localhost:3000/post/delete/${id}`);
  }
  // methode pour modifier un post
  updatePost(data:PostModel):Observable<any>{
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });
    return this.http.post(`http://localhost:3000/post/update`, data, { headers: headers });
  }

  // methode pour recuperer la liste des poste d'un user
  getUserPosts(): Observable<any>{
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });
    return this.http.get(`http://localhost:3000/post/postUser/`, {headers: headers});
  }
}
