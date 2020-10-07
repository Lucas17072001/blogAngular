import { AuthService } from './../service/auth.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  sair(){
    this.router.navigate(["/loguin"])
    localStorage.clear()
  }
}
