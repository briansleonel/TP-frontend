import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-find-pasajero',
  templateUrl: './find-pasajero.component.html',
  styleUrls: ['./find-pasajero.component.css']
})
export class FindPasajeroComponent implements OnInit {

  pasajeros: Array<Person>;

  constructor() { }

  ngOnInit(): void {
    this.pasajeros = new Array<Person>();
  }

}
