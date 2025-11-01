import { Component } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  imports: [],
  templateUrl: './pelicula.html',
  styleUrl: './pelicula.css',
})
export class Pelicula {
  ngOnInit() {
    console.log("El comoponente de películas esta ARRANCANDO");
  }

  ngOnDestroy() {
    console.log("El componente de películas ha sido DESTRUIDO");
  }
}
