import { Component } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  imports: [],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css',
})
export class Cuenta {
  public tipo_cuenta: string = 'Ahorro'

  ngOnInit() {
    console.log("El componente está Arrancando...");
  }

  ngOnDestroy() {
    console.log("El componente ha sido Destruido!");
  }
}
