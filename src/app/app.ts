import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { Producto } from "./components/producto/producto";
import { Perfil } from "./components/perfil/perfil";
import { Usuario } from './components/usuario/usuario';
import { Prestamos } from './components/prestamos/prestamos';
import { Ventas } from './components/ventas/ventas';
import { config } from './models/config'
import { Cine } from './components/cine/cine';
import { Cuenta } from './components/cuenta/cuenta';
import { Transacciones } from './components/transacciones/transacciones';
import { Padre } from './components/padre/padre';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('este es mi nuevo proyecto de práctica.');
  
  titulo = config.title;
  descripcion = config.description;

  es404: boolean = false;

  constructor(private router: Router) {}

  
}
