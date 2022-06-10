import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  categoria: Categoria = new Categoria()
  listaTemas: Categoria[]
  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/login'])
    }
    this.findByAllTemas()
  }

  findByAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Categoria[]) => {
      this.listaTemas = resp
    })
  }

  cadastrar(){
    this.temaService.postTema(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp 
      alert('Tema cadastrado com sucesso!')
      this.findByAllTemas()
      this.categoria = new Categoria()
    })
  }

}