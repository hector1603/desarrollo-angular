import { UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [UpperCasePipe],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  nombreHijo: string = 'Componente Hijo'
  @Input() nombrePadre: string = '';

  @Output() saludoHijo = new EventEmitter();

  enviarSaludo() {
    this.saludoHijo.emit('Hola cómo estas Padre?');
  }
}
