import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario = new Usuario()
  nome = environment.nome
  foto = environment.foto
  id = environment.id
  tipo = environment.tipo

  constructor(
    private auth: AuthService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    if(environment.token == ''){
      // alert('Sua sessão expirou, faça login novamente!')
      this.router.navigate(['/login'])
    }
    this.findByIdUsuario()
  }

  findByIdUsuario(){
    this.authService.getByIdUsuario(this.id).subscribe((resp: Usuario) => {
      this.usuario = resp
      console.log(this.usuario)
    })
  }

  }
