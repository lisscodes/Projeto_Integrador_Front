import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { BemvindoComponent } from './bemvindo/bemvindo.component';
import { InicioComponent } from './inicio/inicio.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FeedComponent } from './feed/feed.component';
>>>>>>> d6dede49462ac42a5dfa5ada26a21f89606db1e5

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent
=======
    MenuComponent,
    RodapeComponent,
    BemvindoComponent,
    InicioComponent,
    CadastrarComponent,
    FeedComponent
>>>>>>> d6dede49462ac42a5dfa5ada26a21f89606db1e5
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
