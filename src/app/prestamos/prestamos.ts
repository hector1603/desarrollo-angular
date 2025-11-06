import { Component } from '@angular/core';

@Component({
  selector: 'app-prestamos',
  imports: [],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css',
})
export class Prestamos {
  public enlaceWeb: string = "https://linkedin.com"
  estadoEnlace = true;

  prestamosList = [
    { id: 1, monto: 120, estado: 'Aprobado' },
    { id: 2, monto: 150, estado: 'Pediente' },
    { id: 3, monto: 100, estado: 'Aprobado' },
    { id: 4, monto: 280, estado: 'Aprobado' },
    { id: 5, monto: 327, estado: 'Pendiente' },
    { id: 6, monto: 1200, estado: 'Aprobado' },
  ]

  cambiarEstadoEnlace() {
    if (this.estadoEnlace) {
      this.estadoEnlace = false;
    } else {
      this.estadoEnlace = true;
    }
  }
}
