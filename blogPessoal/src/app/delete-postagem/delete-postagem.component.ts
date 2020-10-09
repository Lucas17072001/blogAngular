import { ActivatedRoute, Router } from '@angular/router';
import { PostagemService } from './../service/postagem.service';
import { postagem } from './../model/postagem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-postagem',
  templateUrl: './delete-postagem.component.html',
  styleUrls: ['./delete-postagem.component.css']
})
export class DeletePostagemComponent implements OnInit {

  postagem: postagem = new postagem()

  constructor(
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    let id: number = this.route.snapshot.params["id"]
    this.findByIdPostagem(id)
  }

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: postagem)=>{
      this.postagem = resp
    })

  }

btnSim(){
this.postagemService.deletePostagem(this.postagem.id).subscribe(()=>{
  this.router.navigate(["/feed"])
  alert("Postagem apagada com sucesso")
})
}

btnNao(){
  this.router.navigate(["/feed"])
}

}
