import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { CompotasComponent } from './projects/compotas/compotas.component';
import { PeliculasComponent } from './projects/peliculas/peliculas.component';



export const routes: Routes = [
    { path: '', component: PrincipalComponent },
    { path: 'compotas', component: CompotasComponent }, 
    { path: 'contacts', loadChildren: () => import('./features/contacts.routes')},
    { path: 'peliculas', component: PeliculasComponent },
    { path: '**', redirectTo: '' }
    
    // { path: 'home', loadChildren: () => import('./home/home.').then(m => m.HomeModule) }
  
];
