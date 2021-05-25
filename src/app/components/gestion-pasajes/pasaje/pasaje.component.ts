import { Component, OnInit } from '@angular/core';
import { Passage } from 'src/app/models/passage';
import { Person } from 'src/app/models/person';
import { PasajeroService } from 'src/app/services/pasajero.service';

@Component({
  selector: 'app-pasaje',
  templateUrl: './pasaje.component.html',
  styleUrls: ['./pasaje.component.css']
})
export class PasajeComponent implements OnInit {

  pasaje: Passage;
  precioSinDesc: number;

  pasajeros: Array<Person>;

  constructor(private pasajeroService: PasajeroService) { 
    this.pasaje = new Passage();
    this.pasajeros = new Array<Person>();
    this.getPasajeros();
  }

  getPasajeros(): void {
    this.pasajeroService.getAll().subscribe(
      (result) => {
        this.pasajeros = new Array<Person>();
        result.forEach( element => {
          var pers = new Person();
          Object.assign(pers, element);
          this.pasajeros.push(pers);
        })
        console.log(this.pasajeros)
      }
    )
  }

  calcularDescuento(): void {
    if(this.pasaje.categoriaPasajero === "m")
      this.pasaje.precioPasaje = this.precioSinDesc - this.precioSinDesc * 0.25;
    else if (this.pasaje.categoriaPasajero === "j")
      this.pasaje.precioPasaje = this.precioSinDesc - this.precioSinDesc * 0.5;
    else 
      this.pasaje.precioPasaje = this.precioSinDesc;
  }

  getDescuento(): void {
    if(this.pasaje.categoriaPasajero != null && this.precioSinDesc != null){
      this.calcularDescuento();
      //this.alertMessage = "";
    }
  }

  ngOnInit(): void {
  }

}
