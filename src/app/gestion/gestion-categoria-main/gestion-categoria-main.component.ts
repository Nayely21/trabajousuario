import { Component, OnInit } from '@angular/core';
import { Categoria, categorias } from '../../modelo/categoria.class';
import { GestionCategoriaservice } from './services/gestion-categoria.service';

@Component({
  selector: 'app-gestion-categoria-main',
  templateUrl: './gestion-categoria-main.component.html',
  styleUrls: ['./gestion-categoria-main.component.css']
})
export class GestionCategoriaMainComponent implements OnInit {

  constructor(
    private gestioncategoriaservice:GestionCategoriaservice,
    
  ) {
   }
  nombreCategoria:String=""
  ngOnInit(): void {
  }
 categorias:Categoria[]=categorias
 
  agregar(){
    this.gestioncategoriaservice.agregarcategoria(this.nombreCategoria)
  }
  eliminacion:number[]=[]
  eliminar(){
    this.gestioncategoriaservice.eliminarcategoria(this.eliminacion)
    this.eliminacion=[]
  }
  

  
}

