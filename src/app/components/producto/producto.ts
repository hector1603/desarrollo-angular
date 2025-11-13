import { Component } from "@angular/core";
import { Pelicula } from "../pelicula/pelicula";

@Component({
    selector: 'app-producto',
    imports: [Pelicula],
    templateUrl: './producto.html',
    styleUrl: './producto.css'
})

export class Producto {
    public nombre: string;
    public marca: string;
    public precio: number;
    public descripcion: string;

    public mostrar_peliculas = true;

    constructor() {
        this.nombre = 'HP Pavillon';
        this.marca = 'HP';
        this.precio = 957;
        this.descripcion = 'Es un laptop extremandamente potente'
    }

    ngOnInit() {
        console.log("El hook OnInit se esta ejecutando...")
    }

    ngAfterViewInit() {
        console.log("La vista esta cargada ngAfterViewInit...")
    }

    ngDoCheck() {
        console.log("Componente actualizado!")
    }

    cambiarNombre() {
        this.nombre = "Asus"
    }

    ocultarPeliculas(valor: boolean) {
        this.mostrar_peliculas = valor;
    }
}