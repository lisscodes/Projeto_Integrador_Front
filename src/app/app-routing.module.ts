import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { FeedComponent } from './feed/feed.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'}, //caminho para os componentes
  {path:'login',component:LoginComponent},
  {path:'cadastrar',component:CadastrarComponent},
  {path:'inicio',component:InicioComponent},
  {path:'feed',component:FeedComponent},
  {path: 'tema', component:TemaComponent},
  {path: 'tema-edit/:id', component: TemaEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
