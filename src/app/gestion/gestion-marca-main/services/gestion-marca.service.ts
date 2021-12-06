import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Marca, marcas } from '../../../modelo/marca.class';

@Injectable({
    providedIn: 'root'
})
export class GestionMarcaservice{

    constructor(private http: HttpClient){}

    public listar: Marca[] = []

    listarMarca(){
        this.http.get<Marca[]>('http://127.0.0.1:8080/api/marca')
        .subscribe(resp => {
            console.log(resp);
            //marcas.concat(resp);
            //const marcas = resp
            this.listar = resp
        })
    }


    agregarmarca(nombreMarca:String){
        const nuevoMarca:Marca=new Marca(0,nombreMarca,[])
        marcas.push(nuevoMarca);
    }

    agregarmarcaa(marca: Marca){
        this.http.post<any>('http://127.0.0.1:8080/api/marca',marca).subscribe();
    }

    eliminarmarca(eliminacion:number[]){
        eliminacion.sort(function(a, b){return b - a});
        for(let i:number=0;eliminacion.length>i;i++){
            marcas.splice(eliminacion[i],1)    
          }
    }

}
