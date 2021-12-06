import { Component, OnInit } from '@angular/core';
import { Marca, marcas } from '../../modelo/marca.class';
import { GestionMarcaservice } from './services/gestion-marca.service';

@Component({
  selector: 'app-gestion-marca-main',
  templateUrl: './gestion-marca-main.component.html',
  styleUrls: ['./gestion-marca-main.component.css']
})
export class GestionMarcaMainComponent implements OnInit {

  constructor(
    private gestionmarcaservice:GestionMarcaservice
    
  ) { 
    this.gestionmarcaservice.listarMarca();
  }
  
  get listarmarcas(){
    return this.gestionmarcaservice.listar
  }


  nombreMarca:String=""
  nuevaMarca = new Marca(0,this.nombreMarca,[])

  crearMarca(){
    this.gestionmarcaservice.agregarmarcaa(this.nuevaMarca);
  }


  
  ngOnInit(): void {
  }
  
  eliminacion:number[]=[]
  
  eliminar(){
    this.gestionmarcaservice.eliminarmarca(this.eliminacion)
    this.eliminacion=[]
  }
  
  agregar(){
    this.gestionmarcaservice.agregarmarca(this.nombreMarca)
  }
  
}
