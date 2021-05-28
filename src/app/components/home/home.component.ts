import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ConfirmDialogComponent } from '../utils/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  person = {apellido: "Apellido", nombre: 'nombre'}

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { message: '¿Desea eliminar?', obj: this.person }});
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
      if(res)
        console.log('ELiminar')
    });
  }
}
