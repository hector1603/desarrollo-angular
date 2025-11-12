import { Component } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, DatePipe, TitleCasePipe, CurrencyPipe, SlicePipe } from '@angular/common';

import { Ventas } from '../ventas/ventas';
import { Producto } from '../producto/producto';
import { CambiaLetrasPipe } from '../pipes/cambiarLetras';

@Component({
  selector: 'app-usuario',
  imports: [CambiaLetrasPipe, Ventas, Producto, UpperCasePipe, LowerCasePipe, DatePipe, TitleCasePipe, CurrencyPipe, SlicePipe],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})

export class Usuario {
  public web: string = 'https://amazon.com';
  redirigir = true;
  date = '10-11-2025';
  amount = 1234.45;
  fecha = new Date(2031,10,15);

  marcaAutos = [
    {id: 1, nombre: 'Toyota'},
    {id: 2, nombre: 'Jeep'},
    {id: 3, nombre: 'BMW'},
    {id: 4, nombre: 'Mazda'},
    {id: 5, nombre: 'Nissan'},
  ]

  usuario = {
    id: 1,
    nombre: 'Hector',
    nick: 'HectorDev',
    rol: 'admin'
  };

  ngOnInit() {
    //this.marcaAutos = [];
  }
  
  cambiarDireccion()  {
    if (this.redirigir) {
      this.redirigir = false;
    } else {
      this.redirigir = true;
    }
  }
}
