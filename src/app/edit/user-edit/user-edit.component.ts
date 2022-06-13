import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  usuario: Usuario = new Usuario()
  idUsuario: number
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      this.router.navigate(['/login'])
    }

    this.idUsuario = this.route.snapshot.params['id']
    this.findByUsuario(this.idUsuario)

  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  atualizar() {

    this.usuario.tipo = this.tipoUsuario

    if(this.usuario.senha != this.confirmarSenha){
      alert('As senhas estão incorretas.')
    } else {
      this.authService.atualizar(this.usuario).subscribe((resp: Usuario) =>{
        this.usuario = resp
        this.router.navigate(['/feed'])
        alert('Usuario atualizado com sucesso, faça o login novamente.')
        environment.token = ''
        environment.nome = ''
        environment.foto = ''
        environment.id = 0
        
        this.router.navigate(['/login'])
      })

    }
  
  }

  findByUsuario(id: number) {
    this.authService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

}