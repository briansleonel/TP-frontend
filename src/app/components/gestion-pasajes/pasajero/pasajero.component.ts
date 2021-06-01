import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Person } from 'src/app/models/person';
import { PasajeroService } from 'src/app/services/pasajero.service';
import { ConfirmDialogComponent } from '../../utils/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.component.html',
  styleUrls: ['./pasajero.component.css'],
})
export class PasajeroComponent implements OnInit {
  pasajero: Person;

  constructor(
    private pasajeroService: PasajeroService,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {}

  confirm(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: '¿Guardar datos?',
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) this.save();
    });
  }

  save(): void {
    this.pasajeroService.addPasajero(this.pasajero).subscribe((result) => {
      if (result.status == '1') {
        this.router.navigate(['passage']);
        this.toastr.success('Pasajero guardado');
      } else {
        this.toastr.error('Error: ', result.msg);
      }
    });
  }

  cancel(): void {
    console.log(this.isEmpty())
    if (this.isEmpty()) this.router.navigate(['passage']);
    else {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: '¿Salir sin guardar?',
      });
      dialogRef.afterClosed().subscribe((res) => {
        if (res) this.router.navigate(['passage']);
      });
    }
  }

  ngOnInit(): void {
    this.pasajero = new Person();
    console.log(this.isEmpty())
  }

  isEmpty(): boolean {
    if (
      this.pasajero.apellido == undefined &&
      this.pasajero.email == undefined &&
      this.pasajero.nombre == undefined &&
      this.pasajero.nro_documento == undefined
    )
      return true;
    else return false;
  }
}
