import { Component } from '@angular/core';
import { Transacciones } from '../transacciones/transacciones';
import { CurrencyPipe, DatePipe, SlicePipe, NgStyle } from '@angular/common';
import { ConvertirASCII } from '../../pipes/convertirASCII';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prestamos',
  imports: [ConvertirASCII, Transacciones, CurrencyPipe, DatePipe, SlicePipe, FormsModule, NgStyle],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css',
})
export class Prestamos {
  public enlaceWeb: string = "https://linkedin.com"
  estadoEnlace = true;
  frase = 'Hola Angular';
  public orange: string = '#ff9900ff';

  public nuevoMonto: number = 0;
  public nuevoEstado: string = 'Pendiente';

  prestamosList = [
    { id: 1, monto: 120, estado: 'Aprobado' },
    { id: 2, monto: 150, estado: 'Pediente' },
    { id: 3, monto: 100, estado: 'Aprobado' },
    { id: 4, monto: 280, estado: 'Aprobado' },
    { id: 5, monto: 327, estado: 'Pendiente' },
    { id: 6, monto: 1200, estado: 'Aprobado' },
  ]

  prestamo = {
    id: 1,
    tipo: 'hipotecario',
    interes: 22
  };

  cambiarEstadoEnlace() {
    if (this.estadoEnlace) {
      this.estadoEnlace = false;
    } else {
      this.estadoEnlace = true;
    }
  }

  deletePrestamo(indice: number) {
    this.prestamosList.splice(indice, 1);
  }

  addPrestamo() {
    let identificador;

    if(this.prestamosList.length === 0) {
      identificador = 1;
    } else {
      identificador = this.prestamosList[this.prestamosList.length - 1].id + 1;
    }

    const nuevoPrestamo = {
      id: identificador,
      monto: this.nuevoMonto,
      estado: this.nuevoEstado
    }
    this.prestamosList.push(nuevoPrestamo);
  }
}
