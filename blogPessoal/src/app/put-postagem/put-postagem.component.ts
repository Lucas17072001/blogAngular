import { PostagemService } from './../service/postagem.service';
import { TemaService } from './../service/tema.service';
import { tema } from './../model/tema';
import { postagem } from './../model/postagem';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-put-postagem',
  templateUrl: './put-postagem.component.html',
  styleUrls: ['./put-postagem.component.css']
})
export class PutPostagemComponent implements OnInit {

  postagem: postagem = new postagem()
  idPost: number
  tema: tema = new tema()
  listaTemas: tema[]

  idTema: number

  constructor(
   private temaService: TemaService,
   private postagemService: PostagemService,
   private router: Router,
   private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.idPost = this.route.snapshot.params["id"]
    this.findByIdPostagem(this.idPost)
    this.findAllTemas()
  }

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: postagem)=>{
      this.postagem = resp
    })

  }

  salvar(){

    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.postagemService.putPostagem(this.postagem).subscribe((resp: postagem)=>{
      this.postagem = resp
      this.router.navigate(["/feed"])
      alert("Postagem alterada com sucesso")
    },err =>{
      if(err.status == "500"){
        alert("Preencha todos os campos corretamente, antes de enviar!")
      }
    })

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
