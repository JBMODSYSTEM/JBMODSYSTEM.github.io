import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';

const contactsRoute:Routes = [
    {
        path: '', component: ListComponent // Evita la carga perezosa del componente ListComponent
    }
]

export default contactsRoute; // Exporta las rutas