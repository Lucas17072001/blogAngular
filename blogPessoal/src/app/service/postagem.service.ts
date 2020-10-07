import { postagem } from './../model/postagem';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set("Authorization", localStorage.getItem("token"))
  }

  getAllPostagem(){
    return this.http.get("http://localhost:8080/postagens", this.token)
  }
postPostagem(postagem: postagem){
return this.http.post("http://localhost:8080/postagens",postagem, this.token)
}

}
