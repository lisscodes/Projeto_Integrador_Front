import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Postagem } from '../model/Postagem';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  tema: Categoria = new Categoria()
  listaTemas: Categoria[]
  idTema: number

  usuario: Usuario = new Usuario()
  idusuario = environment.id
  foto = environment.foto
  nome = environment.nome
  tipo = environment.tipo


  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private categoriaService: CategoriaService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/login'])
    }
    this.authService.refreshToken()
    this.getAllTemas()
    this.getAllPostagens()
  }

  getAllTemas(){
    this.categoriaService.getAllTema().subscribe((resp: Categoria[]) => {
    this.listaTemas = resp
    })
  }

  findByIdTema(){
    this.categoriaService.getAllTema().subscribe((resp: Categoria[]) => {
      this.listaTemas = resp
    })
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findByIdUsuario(){
    this.authService.getByIdUsuario(this.idusuario).subscribe((resp: Usuario) => {
      this.usuario = resp
      console.log(this.usuario)
    })
  }

  publicar(){
    this.tema.id = this.idTema
    this.postagem.categoria = this.tema

    this.usuario.id = this.idusuario
    this.postagem.usuario = this.usuario

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
  }


}
