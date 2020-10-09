import { environment } from './../../environments/environment.prod';
import { postagem } from './../model/postagem';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  getAllPostagem(){
    return this.http.get("http://localhost:8080/postagens", this.token)
  }

  getByIdPostagem(id: number){
    return  this.http.get(`http://localhost:8080/postagens/${id}`, this.token)
  }

postPostagem(postagem: postagem){
return this.http.post("http://localhost:8080/postagens",postagem, this.token)
}

putPostagem(postagem: postagem){
  return this.http.put("http://localhost:8080/postagens",postagem, this.token)
}

deletePostagem(id: number){
  return  this.http.delete(`http://localhost:8080/postagens/${id}`, this.token)
}
}
