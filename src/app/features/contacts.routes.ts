import { Routes } from '@angular/router';

const contactsRoute:Routes = [
    {
        path: '', loadComponent: () => import('./contacts/list/list.component').then(m => m.ListComponent)
    }
]

export default contactsRoute;