import { Routes } from '@angular/router';
import { Producto } from './components/producto/producto';
import { Cine } from './components/cine/cine';
import { Pelicula } from './components/pelicula/pelicula';
import { Usuario } from './components/usuario/usuario';
import { Ventas } from './components/ventas/ventas';
import { Padre } from './components/padre/padre';
import { Page404 } from './components/page404/page404';
import { Cuenta } from './components/cuenta/cuenta';
import { Perfil } from './components/perfil/perfil';
import { Transacciones } from './components/transacciones/transacciones';
import { Prestamos } from './components/prestamos/prestamos';

export const routes: Routes = [
    { path: '', component: Perfil },
    //{ path: 'inicio', component: Producto },
    //{ path: 'componentes', component: Producto },
    //{ path: 'ciclo', component: Pelicula },
    //{ path: 'plantillas', component: Usuario },
    //{ path: 'directivas', component: Ventas },
    //{ path: 'modelos', component: Cine },
    //{ path: 'comunicacion', component: Padre },
    
    { path: 'inicio', component: Perfil },
    { path: 'cuenta', component: Cuenta },
    { path: 'transacciones', component: Transacciones },
    { path: 'prestamos', component: Prestamos },
    { path: '**', component: Page404 },
];
