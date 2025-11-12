import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producto } from "./producto/producto";
import { Perfil } from "./perfil/perfil";
import { Usuario } from './usuario/usuario';
import { Prestamos } from './prestamos/prestamos';
import { Ventas } from './ventas/ventas';

@Component({
  selector: 'app-root',
  imports: [Ventas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('este es mi nuevo proyecto de práctica.');
}
