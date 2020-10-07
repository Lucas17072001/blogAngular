import { tema } from './../model/tema';
import { TemaService } from './../service/tema.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-tema',
  templateUrl: './post-tema.component.html',
  styleUrls: ['./post-tema.component.css']
})
export class PostTemaComponent implements OnInit {

  tema: tema = new tema()
  listaTemas: tema[]

  constructor(
    private temaService: TemaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.findAllTemas()
  }

  findAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: tema[]) => {
      this.listaTemas = resp
    })
      }

    findByIdTema(){
     this.temaService.getByIdTema(this.tema.id).subscribe((resp: tema)=>{
    this.tema = resp;
     })
    }

    cadastrar(){
      if(this.tema.descricao == null){
alert("Preencha o campo  de tema corretamente ")
      }else{
        this.temaService.postTema(this.tema).subscribe((resp: tema)=>{
          this.tema = resp
          this.router.navigate(["/feed"])
          alert("Tema cadastrado com sucesso")
        })
      }
    }
}
