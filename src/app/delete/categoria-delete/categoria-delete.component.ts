import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = new Categoria()
  idCategoria: number

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ''){
      alert('Sua sessão expirou, faça login novamente!')
      this.router.navigate(['/login'])
    }

    this.idCategoria = this.route.snapshot.params['id']
    this.findByCategoria(this.idCategoria)
  }

  findByCategoria(id: number){
    this.categoriaService.getByIdTema(id).subscribe((resp: Categoria)=>{
      this.categoria = resp
    })
  }

  apagar(){
    this.categoriaService.deleteTema(this.idCategoria).subscribe(()=>{
      alert('Tema deletado com sucesso!')
      this.router.navigate(['/categoria'])
    })
  }

}
