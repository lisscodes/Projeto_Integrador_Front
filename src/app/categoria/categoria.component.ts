import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria()
  listaTemas: Categoria[]
  constructor(
    private router: Router,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/login'])
    }
    this.findByAllTemas()
  }

  findByAllTemas(){
    this.categoriaService.getAllTema().subscribe((resp: Categoria[]) => {
      this.listaTemas = resp
    })
  }

  cadastrar(){
    this.categoriaService.postTema(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp 
      alert('Tema cadastrado com sucesso!')
      this.findByAllTemas()
      this.categoria = new Categoria()
    })
  }


}
