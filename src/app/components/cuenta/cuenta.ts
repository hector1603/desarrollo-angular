import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-cuenta',
  imports: [CurrencyPipe],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css',
})
export class Cuenta {
  public tipo_cuenta: string = 'Ahorro'

  public cliente1: Cliente = new Cliente(1, 'Hector', 'Ajuamdo', 'hector@gmail.com', 2500);

  ngOnInit() {
    console.log("El componente está Arrancando...");
  }

  ngOnDestroy() {
    console.log("El componente ha sido Destruido!");
  }
}
