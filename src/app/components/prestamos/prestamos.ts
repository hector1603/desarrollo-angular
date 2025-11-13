import { Component } from '@angular/core';
import { Transacciones } from '../transacciones/transacciones';
import { CurrencyPipe, DatePipe, SlicePipe } from '@angular/common';
import { ConvertirASCII } from '../../pipes/convertirASCII';

@Component({
  selector: 'app-prestamos',
  imports: [ConvertirASCII, Transacciones, CurrencyPipe, DatePipe, SlicePipe],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css',
})
export class Prestamos {
  public enlaceWeb: string = "https://linkedin.com"
  estadoEnlace = true;
  frase = 'Hola Angular';

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
}
