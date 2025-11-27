import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producto } from "./components/producto/producto";
import { Perfil } from "./components/perfil/perfil";
import { Usuario } from './components/usuario/usuario';
import { Prestamos } from './components/prestamos/prestamos';
import { Ventas } from './components/ventas/ventas';
import { config } from './models/config'
import { Cine } from './components/cine/cine';
import { Cuenta } from './components/cuenta/cuenta';
import { Transacciones } from './components/transacciones/transacciones';

@Component({
  selector: 'app-root',
  imports: [Prestamos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('este es mi nuevo proyecto de práctica.');
  
  titulo = config.title;
  descripcion = config.description;
}
