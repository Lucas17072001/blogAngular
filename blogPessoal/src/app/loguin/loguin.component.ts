import { UserLogin } from './../model/UserLoguin';
import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.css']
})
export class LoguinComponent implements OnInit {

  userLoguin: UserLogin = new UserLogin

  constructor(
    private AuthService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  entra(){
this.AuthService.logar(this.userLoguin).subscribe((resp: UserLogin)=>{
  this.userLoguin = resp
  localStorage.setItem("token", this.userLoguin.token)
  this.router.navigate (["/feed"])
})

  }
}
