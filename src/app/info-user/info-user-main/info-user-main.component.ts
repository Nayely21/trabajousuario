import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario.class';
import { usuarioactivo, localactivo } from '../../login/login-main/services/login.service';
import { Local } from '../../modelo/local.class';
import { InfoUserService } from '../services/info-user.service';
import { usuarios } from '../../modelo/usuario.class';


@Component({
  selector: 'app-info-user-main',
  templateUrl: './info-user-main.component.html',
  styleUrls: ['./info-user-main.component.css']
})
export class InfoUserMainComponent implements OnInit {

  constructor(private infouserServices: InfoUserService) {
    this.infouserServices.listarUsuario();
   }

  ngOnInit(): void {
  }

  codUsuario:number=0
  dniUsuario:String=''
  NombreUsuario:String=''
  ApeliidoUsuario:String=''
  Usuario:String=''
  Contrasena:string=''
  Contrasenaa:String=''
  Celular:String=''
  Correo:string=''
  Direccion:String=''
  usuarios:Usuario[] = usuarios


  public nuevoUsuario =new Usuario(0,this.dniUsuario,this.NombreUsuario,this.ApeliidoUsuario,this.Usuario,this.Contrasena,
    this.Celular,this.Correo,this.Direccion)


  get listarusuario(){
    return this.infouserServices.listar
  }


  get serviceUsuario(){
    return this.infouserServices
  }

  

  
}
