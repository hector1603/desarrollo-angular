import { Component } from '@angular/core';
import { Transaccion } from '../../models/transaccion';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-transacciones',
  imports: [DatePipe],
  templateUrl: './transacciones.html',
  styleUrl: './transacciones.css',
})
export class Transacciones {
  public transaccionesList: Array<Transaccion>;

  constructor(){
    this.transaccionesList = [
      new Transaccion(1, new Date(), 'Depósito de nómina mensual', 2500.00, 'Ingreso'),
      new Transaccion(2, new Date(), 'Compra de equipo de cómputo', -950.00, 'Egreso'),
      new Transaccion(3, new Date(), 'Pago de factura de electricidad', -85.50, 'Egreso'),
      new Transaccion(4, new Date(), 'Transferencia interbancaria recibida', 450.00, 'Ingreso'),
      new Transaccion(5, new Date(), 'Retiro en ventanilla del banco', -100.00, 'Egreso'),
      new Transaccion(6, new Date(), 'Intereses generados por ahorro', 5.75, 'Ingreso')
    ];
  } 
}
