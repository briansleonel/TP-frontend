import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  noticia: Noticia;

  files; rawFiles;

  constructor(private noticiaService: NoticiaService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.noticia = new Noticia();
    this.noticia.vigente = true;
  }

  onFileChanges(files){
    //console.log("File has changed:", files);
    this.noticia.img = files[0].base64;
    //console.log(this.noticia.img)
  }

  save(): void {
    this.noticiaService.add(this.noticia).subscribe(
      (result) => {
        console.log(result);
        if(result.status == '1')
        this.noticia = new Noticia();
        this.files = '';
        this.router.navigate(['noticias']);
      }
    )
  }

  ngOnInit(): void {
  }

}
