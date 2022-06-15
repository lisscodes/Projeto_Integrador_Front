import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { FeedComponent } from './feed/feed.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [
  {path:'',redirectTo:'inicio',pathMatch:'full'}, //caminho para os componentes
  {path:'login',component:LoginComponent},
  {path:'cadastrar',component:CadastrarComponent},
  {path:'inicio',component:InicioComponent},
  {path:'feed',component:FeedComponent},
  {path:'categoria', component:CategoriaComponent},
  {path:'categoria-edit/:id', component: CategoriaEditComponent},
  {path:'categoria-delete/:id',component:CategoriaDeleteComponent},
  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent},
  {path: 'user-edit/:id', component: UserEditComponent},
  {path: 'perfil', component: PerfilComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
