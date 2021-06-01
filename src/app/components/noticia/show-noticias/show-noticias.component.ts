import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';
import { ConfirmDialogComponent } from '../../utils/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-show-noticias',
  templateUrl: './show-noticias.component.html',
  styleUrls: ['./show-noticias.component.css'],
})
export class ShowNoticiasComponent implements OnInit {
  noticias: Array<Noticia>;

  noticia: Noticia;

  find: Noticia;

  constructor(
    private noticiaService: NoticiaService,
    private dialog: MatDialog,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.noticias = new Array<Noticia>();
    this.noticia = new Noticia();
    this.find = new Noticia();
    this.find.vigente = null
    this.getNoticias();
  }

  getNoticias(): void {
    this.noticiaService.getNoticiasFilter(this.find).subscribe((result) => {
      this.noticias = new Array<Noticia>();
      result.forEach((element) => {
        let not = new Noticia();
        Object.assign(not, element);
        this.noticias.push(not);
      });
    });
  }

  confirmDelete(noticia: Noticia): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: '¿Eliminar noticia?',
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) this.deleteNoticia(noticia);
    });
  }

  deleteNoticia(noticia: Noticia): void {
    this.noticiaService.delete(noticia).subscribe((result) => {
      if (result.status == '1') {
        this.toastr.info('Noticia eliminada');
        this.getNoticias();
      } else this.toastr.warning('Error inesperado');
    });
  }

  confirmChangeState(noticia: Noticia): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.assignMessageChangeState(noticia),
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) this.changeState(noticia);
    });
  }

  assignMessageChangeState(noticia: Noticia): string {
    if(noticia.vigente) return '¿Cambiar estado de la noticia a VIGENTE?'
    else return '¿Cambiar estado de la noticia a NO VIGENTE?'
  }

  changeState(noticia: Noticia): void {
    if (noticia.vigente) noticia.vigente = false;
    else noticia.vigente = true;

    this.updateState(noticia);
  }

  updateState(noticia: Noticia): void {
    this.noticiaService.update(noticia).subscribe((result) => {
      if (result.status == '1') {
        this.toastr.success('¡Estado cambiado!');
        this.getNoticias();
      }
    });
  }

  addNoticia(): void {
    this.router.navigate(['add-noticia']);
  }

  cleanFilters(): void {
    this.find = new Noticia();
    this.find.vigente = null;
    this.toastr.info('Filtros limpios')
  }
  onChangeFilter(event): void {
    this.find.vigente = event;
    console.log(this.find)
    this.toastr.info("Búsqueda finalizada");
    this.getNoticiasFilter();
  }

  getNoticiasFilter(): void {
    this.noticiaService.getNoticiasFilter(this.find).subscribe((result) => {
      this.noticias = new Array<Noticia>();
      result.forEach((element) => {
        let not = new Noticia();
        Object.assign(not, element);
        this.noticias.push(not);
      });
    })
  }
}
