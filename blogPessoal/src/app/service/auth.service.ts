import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLoguin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin) {
    return this.http.post("http://localhost:8080/usuarios/logar", userLogin)
  }

  cadastrar(user: User) {
    return this.http.post("http://localhost:8080/usuarios/cadastrar", user)
  }

  btnsair(){
let ok = false
let token = localStorage.getItem("token")
if(token != null){
ok = true
}
return ok
  }

  btnlogin(){
    let ok = false
    let token = environment.token
    if(token == ""){
    ok = true
    }
    return ok
  }

  btncadastrar(){
    let ok = false
    let token = environment.token
    if(token == ""){
    ok = true
    }
    return ok
  }
}
