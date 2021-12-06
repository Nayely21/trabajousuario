import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Usuario } from '../../../modelo/usuario.class';

@Injectable({
  providedIn: 'root'
})
export class GestionUsuarioService {

  private baseUrl = "http://127.0.0.1:8080/api/usuario"

  constructor(private http: HttpClient) { }


  public listar: Usuario[] = []

    listarUsuario(){
        this.http.get<Usuario[]>(this.baseUrl)
        .subscribe(resp => {
            this.listar = resp
        })
    }
    
    agregarUsuario(usuario: Usuario){
      this.http.post<any>(this.baseUrl,usuario).subscribe();
    }

    eliminarusuario(id: number){
      return this.http.delete(this.baseUrl+'/'+id).subscribe();
  }

  actualizarUsuario(usuario: Usuario, id: number){
    this.http.put<any>(this.baseUrl + '/' + id, usuario).subscribe();
  }


}

