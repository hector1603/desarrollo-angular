import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producto } from "./components/producto/producto";
import { Perfil } from "./components/perfil/perfil";
import { Usuario } from './components/usuario/usuario';
import { Prestamos } from './components/prestamos/prestamos';
import { Ventas } from './components/ventas/ventas';

@Component({
  selector: 'app-root',
  imports: [Ventas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('este es mi nuevo proyecto de práctica.');
}
