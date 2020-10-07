import { TemaService } from './../service/tema.service';
import { PostagemService } from './../service/postagem.service';
import { tema } from './../model/tema';
import { postagem } from './../model/postagem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
key = "data"
reverse: true

  postagem: postagem =new postagem()
  listaPostagens: postagem[]

  tema: tema = new tema()
  listaTemas: tema[]

  idTema: number

  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.findAllPostagens()
    this.findAllTemas()
  }

  findAllPostagens(){
    this.postagemService.getAllPostagem().subscribe((resp: postagem[]) =>{
      this.listaPostagens =resp
    })
  }

  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema
    if(this.postagem.titulo == null || this.postagem.texto == null || this.postagem.tema == null){
alert("preencha todos os campos antes de publicar")
    }else{
      this.postagemService.postPostagem(this.postagem).subscribe((resp: postagem)=>{
        this.postagem = resp
        this.postagem = new postagem
        alert("postagem feita com sucesso")
        this.findAllPostagens
      })
    }
  }

  findAllTemas(){
this.temaService.getAllTemas().subscribe((resp: tema[]) => {
  this.listaTemas = resp
})
  }

findByIdTema(){
 this.temaService.getByIdTema(this.idTema).subscribe((resp: tema)=>{
this.tema = resp;
 })
}
}
