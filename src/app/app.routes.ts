import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { CompotasComponent } from './projects/compotas/compotas.component';
import { PeliculasComponent } from './projects/peliculas/peliculas.component';
import { CalculadoratemporalComponent } from './projects/calculadoratemporal/calculadoratemporal.component';
import { LoginComponent } from '@components/login/login.component';
import { TodolistComponent } from './projects/todolist/todolist.component';

export const routes: Routes = [
    { path: '', component: PrincipalComponent }, // Ruta por defecto
    { path: 'compotas', component: CompotasComponent }, // Ruta para CompotasComponent
    { path: 'login', component: LoginComponent }, // Ruta para LoginComponent
    { path: 'comentarios', loadChildren: () => import('./features/contacts/contacts.routes')}, // Carga perezosa de las rutas de contactos
    { path: 'calculadoratemp', component: CalculadoratemporalComponent }, // Ruta para CalculadoratemporalComponent
    { path: 'peliculas', component: PeliculasComponent}, // Ruta para PeliculasComponent
    { path: 'todolist', component: TodolistComponent}, // Ruta para TodolistComponent
    { path: '**', redirectTo: '' } // Ruta comodín para redirigir a la ruta por defecto
];
