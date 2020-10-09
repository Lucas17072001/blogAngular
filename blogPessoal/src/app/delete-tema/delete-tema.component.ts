import { tema } from './../model/tema';
import { TemaService } from './../service/tema.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-tema',
  templateUrl: './delete-tema.component.html',
  styleUrls: ['./delete-tema.component.css']
})
export class DeleteTemaComponent implements OnInit {

    tema: tema = new tema()
  constructor(
    private temaService: TemaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    let id:number = this.route.snapshot.params["id"];
    this.findByIdTema(id)
  }

  findByIdTema(id: number){
    this.temaService.getByIdTema(id).subscribe((resp: tema)=>{
      this.tema = resp
    })

  }

  btnSim(){
    this.temaService.deleteTema(this.tema.id).subscribe(()=>{
      this.router.navigate(["/cadastro-tema"])
      alert("tema apagado com sucesso")
    })
  }

  btnNao(){
    this.router.navigate(["/cadastro-tema"])
  }
}
