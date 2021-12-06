import { Component, OnInit } from '@angular/core';
import { GestionUsuarioService } from './services/gestion-usuario.service';
import { Usuario } from '../../modelo/usuario.class';

@Component({
  selector: 'app-gestionar-usuario',
  templateUrl: './gestionar-usuario.component.html',
  styleUrls: ['./gestionar-usuario.component.css']
})
export class GestionarUsuarioComponent implements OnInit {

  constructor(private gestionusuarioservice: GestionUsuarioService) { 
    this.gestionusuarioservice.listarUsuario();
  }

  ngOnInit(): void {
  }



  nuevoUsuario = new Usuario(0,"","","","","","","","")
  actualizarUsuario =new Usuario(0,"","","","","","","","")

  get listarusuarios(){
    return this.gestionusuarioservice.listar
  }

  UsuarioActu(UsuarioActualizado: Usuario){
    this.actualizarUsuario = UsuarioActualizado
    this.gestionusuarioservice.listarUsuario();
    this.gestionusuarioservice.listarUsuario();
  }


  eliminarUsuario(id: any){
    this.gestionusuarioservice.eliminarusuario(id)
    this.gestionusuarioservice.listarUsuario();
    this.gestionusuarioservice.listarUsuario();
  }

  crearUsuario(){
    this.gestionusuarioservice.agregarUsuario(this.nuevoUsuario);
    this.gestionusuarioservice.listarUsuario();
    this.gestionusuarioservice.listarUsuario();
    console.log(this.nuevoUsuario)
  }

  actualizarUsuarioF(){
    this.gestionusuarioservice.actualizarUsuario(this.actualizarUsuario, this.actualizarUsuario.codUsuario)
    this.gestionusuarioservice.listarUsuario();
    this.gestionusuarioservice.listarUsuario();
  }

}
