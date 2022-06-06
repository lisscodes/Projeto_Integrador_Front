
import { Categoria } from "./Categoria"
import { Usuario } from "./Usuario"

export class Postagem {
    public id: number
    public titulo: string
    public texto: string
    public foto: string
    public curtida: number
    public data: string
    public categoria: Categoria
    public usuario: Usuario

}
