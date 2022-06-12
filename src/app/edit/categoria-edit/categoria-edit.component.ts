import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit {

  categoria: Categoria = new Categoria(

    )
    constructor(
      private categoriaService: CategoriaService,
      private router: Router,
      private route: ActivatedRoute
    ) { }
  
    ngOnInit(){
      window.scroll(0,0)

      if(environment.token == ''){
        this.router.navigate(['/login'])
      }
      let id = this.route.snapshot.params['id']
      this.findByIdTema(id)
    }
  
    findByIdTema(id: number){
      this.categoriaService.getByIdTema(id).subscribe((resp: Categoria) => {
        this.categoria = resp
      })
    }
  
    atualizar(){
      this.categoriaService.putTema(this.categoria).subscribe((resp: Categoria) => {
        this.categoria = resp
        alert('Tema atualizado com sucesso!')
        this.router.navigate(['/categoria'])
      })
    }

}
