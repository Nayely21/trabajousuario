import { productos } from './producto.class';
import { ProductoLocal, productoslocal } from './productolocal.class';
import { Reserva, reservas } from './reserva.class';
export class DetalleReserva{
    constructor(
        private codDetalleReserva:String,
        private cantidadDetalleReserva:number,
        private productolocalDetalleReserva:ProductoLocal,
        private reservaDetalleReserva:Reserva
    ){

    }
    get getcodDetalleReserva(){
        return this.codDetalleReserva
    }

    get getReservas(){
        return this.reservaDetalleReserva
    }
    get getproductoDetalleReserva(){
        return this.productolocalDetalleReserva
    }
    get getcantiaddDEtalleReserva(){
        return this.cantidadDetalleReserva
    }

}
const detallereserva01=new DetalleReserva("DR001",2,productoslocal[1],reservas[0])
const detallereserva02=new DetalleReserva("DR002",1,productoslocal[2],reservas[0])
const detallereserva03=new DetalleReserva("DR003",3,productoslocal[3],reservas[1])
const detallereserva04=new DetalleReserva("DR004",1,productoslocal[5],reservas[1])
const detallereserva05=new DetalleReserva("DR005",1,productoslocal[7],reservas[2])
const detallereserva06=new DetalleReserva("DR006",3,productoslocal[8],reservas[3])
const detallereserva07=new DetalleReserva("DR007",1,productoslocal[0],reservas[3])
const detallereserva08=new DetalleReserva("DR008",1,productoslocal[2],reservas[3])
const detallereserva09=new DetalleReserva("DR009",1,productoslocal[3],reservas[1])
const detallereserva10=new DetalleReserva("DR010",2,productoslocal[4],reservas[3])
const detallereserva11=new DetalleReserva("DR011",2,productoslocal[5],reservas[3])
 
export const detallesreservas:DetalleReserva[]=[
    detallereserva01,detallereserva02,detallereserva03,detallereserva04,detallereserva05,detallereserva06,detallereserva07,detallereserva08,detallereserva09,detallereserva10,detallereserva11
]
