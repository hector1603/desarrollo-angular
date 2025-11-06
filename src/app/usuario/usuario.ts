import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  imports: [],
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
