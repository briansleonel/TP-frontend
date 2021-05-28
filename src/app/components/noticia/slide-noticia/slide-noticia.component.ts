import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-slide-noticia',
  templateUrl: './slide-noticia.component.html',
  styleUrls: ['./slide-noticia.component.css']
})
export class SlideNoticiaComponent implements OnInit {

  noticias: Array<Noticia>;
  noticia: Noticia;
  indexNoticia: number;

  constructor(private noticiaService: NoticiaService) {
    this.noticias = new Array<Noticia>();
    this.getNoticias();
  }

  getNoticias(): void {
    this.noticiaService.getNoticias().subscribe(
      (result) => {
        //console.log(result)
        this.noticias = new Array<Noticia>();
        result.forEach(
          (element) => {
            this.noticia = new Noticia();
            Object.assign(this.noticia, element);
            this.noticias.push(this.noticia);
          }
        )
        this.noticia = this.noticias[0];
        this.indexNoticia = 0;
        console.log(this.noticias)
      }
    )
    
  }

  siguienteNoticia(): void {
    if(this.esUltimo())
      this.indexNoticia = 0;
    else
      this.indexNoticia++;
    
    this.noticia = this.noticias[this.indexNoticia];
  }

  anteriorNoticia(): void {
    if (this.esPrimera() )
      this.indexNoticia = this.noticias.length - 1;
    else
      this.indexNoticia -= 1;
  
    this.noticia = this.noticias[this.indexNoticia];
  }

  esUltimo(): boolean {
    if(this.noticias.length - 1 === this.indexNoticia)
      return true;
    else
      return false;
  }

  esPrimera(): boolean {
    if(this.indexNoticia === 0)
      return true;
    else
      return false;
  }

  ngOnInit(): void {
  }

}
