import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { BemvindoComponent } from './bemvindo/bemvindo.component';
import { InicioComponent } from './inicio/inicio.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FeedComponent } from './feed/feed.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    RodapeComponent,
    BemvindoComponent,
    InicioComponent,
    CadastrarComponent,
    FeedComponent,
    TemaComponent,
    TemaEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
