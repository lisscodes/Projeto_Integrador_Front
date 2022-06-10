import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>('https://redetec.herokuapp.com/categorias', this.token)
  }

  getByIdTema(id: number): Observable<Categoria>{
    return this.http.get<Categoria>(`https://redetec.herokuapp.com/categorias/${id}`, this.token)
  }

  postTema(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>('https://redetec.herokuapp.com/categorias', categoria, this.token)
  }

  putTema(categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>('https://redetec.herokuapp.com/categorias', categoria, this.token)
  }

  deleteTema(id: number){
    return this.http.delete(`https://redetec.herokuapp.com/categorias/${id}`, this.token)
  }
}
