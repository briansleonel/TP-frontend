import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Passage } from 'src/app/models/passage';
import { PasajeService } from 'src/app/services/pasaje.service';
import { ConfirmDialogComponent } from '../../utils/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-show-pasagges',
  templateUrl: './show-pasagges.component.html',
  styleUrls: ['./show-pasagges.component.css'],
})
export class ShowPasaggesComponent implements OnInit {
  passages: Array<Passage>;
  passage: Passage;
  find: Passage;

  constructor(
    private pasajeService: PasajeService,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {
    
  }

  ngOnInit(): void {
    this.passages = new Array<Passage>();
    this.find = new Passage();
    this.find.categoriaPasajero = '';
    this.viewPassages();
  }

  viewPassages(): void {
    this.pasajeService.getPasajesFilters(this.find).subscribe(
      (result) => {
        this.passages = new Array<Passage>();
        //console.log('result', result);
        result.forEach((element) => {
          let pasaje = new Passage();
          Object.assign(pasaje, element);
          this.passages.push(pasaje);
        });
        //console.log(this.passages);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cleanFilters(): void {
    this.find = new Passage();
    this.find.categoriaPasajero = '';
    this.viewPassages();
    this.toastr.info('Filtros eliminados')
  }

  modificarPasaje(passage: Passage): void {
    this.router.navigate(['passage/', passage._id]);
  }

  confirmDelete(passage: Passage): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: '¿Eliminar pasaje?'});
    dialogRef.afterClosed().subscribe(
      (res) => {
        if(res)
          this.deletePasaje(passage);
      }
    )
  }

  confirmUpdate(passage: Passage): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: '¿Modificar datos?'});
    dialogRef.afterClosed().subscribe(
      (res) => {
        if(res)
          this.modificarPasaje(passage);
      }
    )
  }

  deletePasaje(passage: Passage): void {
    this.pasajeService.deletePassage(passage).subscribe((result) => {
      //console.log(result);
      if (result.status == '1') {
        this.toastr.info('Pasaje eliminado');
        this.viewPassages();
      } else this.toastr.warning('Error inesperado');
    });
  }

  onChangeCategoria(event): void {
    this.find.categoriaPasajero = event;
    this.viewPassages();
    this.toastr.info("Búsqueda finalizada")
  }

  addPassage(): void {
    this.router.navigate(['passage'])
  }
}
