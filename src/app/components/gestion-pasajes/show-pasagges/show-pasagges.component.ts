import { Component, OnInit } from '@angular/core';
import { Passage } from 'src/app/models/passage';
import { PasajeService } from 'src/app/services/pasaje.service';

@Component({
  selector: 'app-show-pasagges',
  templateUrl: './show-pasagges.component.html',
  styleUrls: ['./show-pasagges.component.css']
})
export class ShowPasaggesComponent implements OnInit {

  passages: Array<Passage>;
  passage: Passage;
  find: Passage;

  constructor(private pasajeService: PasajeService) {
    this.passages = new Array<Passage>();
    this.passage = new Passage();
    this.cleanFilters();
    this.viewPassages();
   }

  ngOnInit(): void {
  }

  viewPassages(): void {
    this.pasajeService.getPasajesFilters(this.find).subscribe(
      (result) => {
        this.passages = new Array<Passage>();
        console.log('result',result)
        result.forEach( element => {
          let pasaje = new Passage();
          Object.assign(pasaje, element);
          this.passages.push(pasaje);
        })
        console.log(this.passages)
      },
      (error) => { console.log(error)}
    )
  }

  cleanFilters(): void {
    this.find = new Passage();
    this.find.categoriaPasajero = '';
    this.viewPassages();
  }

}
