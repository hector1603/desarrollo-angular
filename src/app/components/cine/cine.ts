import { Component } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-cine',
  imports: [FormsModule, NgStyle],
  templateUrl: './cine.html',
  styleUrl: './cine.css',
})
export class Cine {
  public titulo: string;
  public peliculas: Array<Pelicula>;
  public mi_pelicula: string = '';
  public tituloPeliculas: string[] = [];

  public color: string = '#fff';

  constructor() {
    this.titulo = 'Modelos';
    this.peliculas =  [
      new Pelicula(1, "Titanic", "Drama", "James Cameron", 1997, "HBO Max", true),
      new Pelicula(2, "El Rey León", "Animación", "Roger Allers", 1994, "Disney Plus", true),
      new Pelicula(3, "Origen", "Ciencia Ficción", "Christopher Nolan", 2010, "Netflix", true),
      new Pelicula(4, "Pulp Fiction", "Crimen", "Quentin Tarantino", 1994, "Amazon Prime", false),
      new Pelicula(5, "Parasite", "Comedia Negra", "Bong Joon-ho", 2019, "Hulu", true),
      new Pelicula(6, "Interstellar", "Ciencia Ficción", "Christopher Nolan", 2014, "Netflix", true),
      new Pelicula(7, "Forrest Gump", "Drama", "Robert Zemeckis", 1994, "Paramount+", false),
      new Pelicula(8, "Coco", "Musical", "Lee Unkrich", 2017, "Disney Plus", true),
      new Pelicula(9, "Gladiador", "Acción", "Ridley Scott", 2000, "Star+", true),
      new Pelicula(10, "El Padrino", "Crimen", "Francis Ford Coppola", 1972, "MGM", true),
    ];
  }

  ngOnInit() {
    console.log(this.peliculas);

    this.peliculas[1].titulo = 'SIMBA'
  }
  /*
  ngDoCheck() {
    console.log(this.mi_pelicula);
  }
  */
  showMovie() {
    alert(this.mi_pelicula);
  }

  addMovie() {
    //this.tituloPeliculas.push(this.mi_pelicula)
    let identificador = this.peliculas[this.peliculas.length - 1].id + 1;
    let nuevaPelicula = new Pelicula(identificador, this.mi_pelicula);
    this.peliculas.push(nuevaPelicula);
  }

  deleteMovie(indice: number) {
    this.peliculas.splice(indice, 1);
  }

  haciendoFoco() {
    console.warn('Estan DENTRO el input de peliculas...')
  }

  salirDelFoco() {
    console.warn('Estan FUERA el input de peliculas...')
  }

  pulsarTecla(event: KeyboardEvent) {
    console.log(`Estas pulsando la tecla ${event.key}`);
  }
}
