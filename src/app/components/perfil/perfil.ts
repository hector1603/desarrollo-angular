import { Component, signal } from '@angular/core';
import { Cuenta } from '../cuenta/cuenta';
import { Transacciones } from '../transacciones/transacciones';
import { Prestamos } from '../prestamos/prestamos';

@Component({
    selector: 'app-perfil',
    imports: [Cuenta, Transacciones, Prestamos],
    templateUrl: './perfil.html',
    styleUrl: './perfil.css'
})

export class Perfil {
    public nombre: string;
    public edad: number;
    public ocupacion: string;
    public direccion: string;
    public telefono: string;

    public mostrar_cuenta = true;

    nombreCliente: string = 'Juan Pérez';

    mensajeRecibido: string = '';
    
    constructor() {
        //alert("¡Bienvenido al perfil, estás dentro de la aplicación!");
        this.nombre = 'Hector Ajumado';
        this.edad = 31;
        this.ocupacion = 'Desarrollador de Software';
        this.direccion = 'Av. Martin Cardenas #546 - Sacaba, Cochabamaba - Bolivia';
        this.telefono = '+591 69496889';
        console.log("Se cargó el componente del perfil correctamente.")
    }

    ngDoCheck() {
        console.log("Componente actualizado!")
    }

    cambiarEdad() {
        this.edad = 40;
    }

    cambiarDireccion(): void {
        this.direccion = "Cochabamba - Bolivia";
    }

    ocultarCuenta(valor: boolean) {
        this.mostrar_cuenta = valor; 
    }

    recibirMensaje(mensaje: string) {
        this.mensajeRecibido = mensaje;
    }
}