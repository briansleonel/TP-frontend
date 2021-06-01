import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Passage } from 'src/app/models/passage';
import { Person } from 'src/app/models/person';
import { PasajeService } from 'src/app/services/pasaje.service';
import { PasajeroService } from 'src/app/services/pasajero.service';
import { ConfirmDialogComponent } from '../../utils/confirm-dialog/confirm-dialog.component';
import { ConfirmPassageDialogComponent } from '../../utils/confirm-passage-dialog/confirm-passage-dialog.component';

@Component({
  selector: 'app-pasaje',
  templateUrl: './pasaje.component.html',
  styleUrls: ['./pasaje.component.css'],
})
export class PasajeComponent implements OnInit {
  pasaje: Passage;
  precioSinDesc: number;

  pasajeros: Array<Person>;

  action: string;

  constructor(
    private pasajeroService: PasajeroService,
    private pasajeService: PasajeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) {
    //this.pasaje = new Passage();
    //this.pasajeros = new Array<Person>();
    //this.getPasajeros();
  }

  ngOnInit(): void {
    this.start();
    this.activatedRoute.params.subscribe((params) => {
      if (params.id != undefined) {
        this.action = 'update';
        this.cargarPassage(params.id);
      } else {
        this.action = 'new';
      }
    });
  }

  /**
   * Parte inicial al entrar al componente
   */
  start(): void {
    this.pasajeros = new Array<Person>();
    this.pasaje = new Passage();
    this.getPasajeros();
  }

  /**
   * Permite cargar la lista de pasajeros que hay en la BD
   */
  getPasajeros(): void {
    this.pasajeroService.getAll().subscribe((result) => {
      this.pasajeros = new Array<Person>();
      result.forEach((element) => {
        var pers = new Person();
        Object.assign(pers, element);
        this.pasajeros.push(pers);
      });
    });
  }

  /**
   * Este método permite mostrar una ventana emergente de confirmación
   */
  confirm(): void {
    //dialog.open - recibe el componente que va a lanzar la ventana emergente, y un objeto que incluye un mensaje y el objeto a guardar
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.assignMessage(),
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) this.save();
    });
  }

  /**
   * Permite guardar un determinado pasaje en la BD
   */
  save(): void {
    if (this.pasaje.precioPasaje === 0)
      this.toastr.warning('El precio ingresado no es válido');
    else {
      if (this.action === 'update') {
        this.updatePassage();
      } else {
        this.newPassage();
      }
    }
  }

  updatePassage(): void {
    this.pasajeService.updatePassage(this.pasaje).subscribe((result) => {
      if (result.status == '1') {
        this.router.navigate(['show-passages']);
        this.toastr.success('¡Cambios guardados!');
      }
    });
  }

  newPassage(): void {
    this.pasaje.fechaCompra = String(new Date());
    this.pasajeService.addPasaje(this.pasaje).subscribe((result) => {
      if (result.status == '1') {
        this.router.navigate(['show-passages']);
        this.toastr.success('¡Pasaje guardado!');
      }
    });
  }

  cancel(): void {
    if (this.isEmpty()) this.router.navigate(['show-passages']);
    else {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: '¿Salir sin guardar?',
      });
      dialogRef.afterClosed().subscribe((res) => {
        if (res) this.router.navigate(['show-passages']);
      });
    }
  }

  assignMessage(): string {
    if (this.action === 'update') return '¿Actualizar datos?';
    else return '¿Guardar datos?';
  }

  addPasajero(): void {
    this.router.navigate(['passenger']);
  }

  findPasajero(): void {
    this.router.navigate(['find-passenger']);
  }

  /**
   * Este método permite cargar un pasaje, cuando se accede al componente en modo de edición de pasaje
   * @param id el pasaje a editar
   */
  cargarPassage(id: string): void {
    this.pasajeService.getPassageById(id).subscribe(
      (result) => {
        Object.assign(this.pasaje, result); //asigno los datos de result en la variable de pasaje
        this.precioSinDesc = 0; //establezco el precio del pasaje en 0 para poder mostrar el precio total registrado
        this.pasaje.pasajero = this.pasajeros.find(
          (a) => a._id == result.pasajero
        ); //busco y asigno el pasajero correspondiente
      },
      (errors) => {
        console.log(errors);
      }
    );
  }

  /**
   * Permite calcular el descuento del pasaje, para un determinado cliente
   */
  calcularDescuento(): void {
    if (this.pasaje.categoriaPasajero === 'm')
      this.pasaje.precioPasaje = this.precioSinDesc - this.precioSinDesc * 0.25;
    else if (this.pasaje.categoriaPasajero === 'j')
      this.pasaje.precioPasaje = this.precioSinDesc - this.precioSinDesc * 0.5;
    else this.pasaje.precioPasaje = this.precioSinDesc;
  }

  /**
   * Permite retornar el descuento de pasaje para el cliente
   */
  getDescuento(): void {
    if (this.pasaje.categoriaPasajero != null && this.precioSinDesc != null) {
      this.calcularDescuento();
    }
  }

  isEmpty(): boolean {
    if (
      this.pasaje._id == undefined &&
      this.pasaje.categoriaPasajero == undefined &&
      this.pasaje.pasajero == undefined &&
      this.pasaje.precioPasaje == undefined
    )
      return true;
    else return false;
  }
}
