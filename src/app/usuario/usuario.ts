import { Component } from '@angular/core';
import { Ventas } from '../ventas/ventas';

@Component({
  selector: 'app-usuario',
  imports: [Ventas],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  public web: string = 'https://amazon.com';
  redirigir = true;

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
