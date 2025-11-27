import { Component } from '@angular/core';
import { Hijo } from '../hijo/hijo';

@Component({
  selector: 'app-padre',
  imports: [Hijo],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class Padre {
  nombrePadre: string = 'Componente Padre';

  saludoRecibido: string = '';

  recibirSaludo(saludo: string) {
    this.saludoRecibido = saludo;
  }
}
