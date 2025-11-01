import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producto } from "./producto/producto";
import { Perfil } from "./perfil/perfil";

@Component({
  selector: 'app-root',
  imports: [Producto, Perfil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('este es mi nuevo proyecto de práctica.');
}
