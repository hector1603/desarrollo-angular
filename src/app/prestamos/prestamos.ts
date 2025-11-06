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

  cambiarEstadoEnlace() {
    if (this.estadoEnlace) {
      this.estadoEnlace = false;
    } else {
      this.estadoEnlace = true;
    }
  }
}
