import { Injectable } from '@angular/core';
import { usuarioactivo, localactivo } from '../../login/login-main/services/login.service';
import { Local } from '../../modelo/local.class';
import {HttpClient} from "@angular/common/http"
import { Usuario } from '../../modelo/usuario.class';

@Injectable({
  providedIn: 'root'
})
export class InfoUserService {

  private baseUrl = "http://127.0.0.1:8080/api/marca"

  constructor(private http: HttpClient) { }
  usuario=usuarioactivo;
  local=localactivo;

  public listar: Usuario[] = []




  listarUsuario(){
    this.http.get<Usuario[]>(this.baseUrl)
    .subscribe(resp => {
        this.listar = resp
    })
}

}
