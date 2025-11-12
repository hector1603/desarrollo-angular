import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ventas',
  imports: [NgClass],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css',
})
export class Ventas {
  public estado: boolean = true;
  public mostrar: string = 'si';
}
