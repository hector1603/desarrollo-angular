import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ventas',
  imports: [NgClass, NgStyle],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css',
})
export class Ventas {
  public estado: boolean = false;
  public mostrar: string = 'si';

  estilos = {
    'font-family': 'Courier New',
    'background-color': 'brown',
    'color': '#ffffff',
    'font-weight': 'bold',
    'padding': '10px'
  };
}
