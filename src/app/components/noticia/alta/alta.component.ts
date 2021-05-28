import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';
import { ConfirmDialogComponent } from '../../utils/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css'],
})
export class AltaComponent implements OnInit {

  noticia: Noticia;

  stringimage: string;

  constructor(
    private noticiaService: NoticiaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {
  }

  onFileChanges(files) {
    console.log('Change Before: ', this.noticia)
    //console.log("File has changed:", files);
    this.noticia.img = files[0].base64;
    this.stringimage = files[0].base64;
    //console.log(this.noticia.img)
    //this.file = files[0]
    console.log('Change After: ', this.noticia)
  }

  save(): void {
    console.log(this.noticia)
    if (this.stringimage != undefined) {
      this.noticiaService.add(this.noticia).subscribe((result) => {
        console.log(result);
        if (result.status == '1') {
          this.noticia = new Noticia();
          this.router.navigate(['noticias']);
          this.toastr.success('', 'Noticia guardada')
        } 
      });
    } else {
      this.toastr.error('', 'Debe adjuntar una imagen');
    }
  }

  cancel(): void {
    this.router.navigate(['noticias']);
  }

  confirm(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: '¿Guardar noticia?'});
    dialogRef.afterClosed().subscribe(
      (res) => {
        if(res)
          this.save();
      }
    )
  }

  ngOnInit(): void {
    this.noticia = new Noticia();
    this.noticia.vigente = true;
  }
}
