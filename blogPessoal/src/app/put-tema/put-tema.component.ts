import { ActivatedRoute, Router } from '@angular/router';
import { TemaService } from './../service/tema.service';
import { tema } from './../model/tema';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-put-tema',
  templateUrl: './put-tema.component.html',
  styleUrls: ['./put-tema.component.css']
})
export class PutTemaComponent implements OnInit {

  tema: tema = new tema()

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    window.scroll(0,0)
    let id: number = this.route.snapshot.params["id"];
    this.findByIdTema(id);
  }

  findByIdTema(id: number){
    this.temaService.getByIdTema(id).subscribe((resp: tema)=>{
   this.tema = resp;
    })
   }

   salvar(){
    this.temaService.putTema(this.tema).subscribe((resp: tema) => {
      this.tema = resp
      this.router.navigate(['/cadastro-tema'])
      alert('Tema atualizado com sucesso!')
    })
   }
}
