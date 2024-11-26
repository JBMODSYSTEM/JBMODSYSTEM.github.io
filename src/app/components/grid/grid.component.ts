import { Component, effect, inject, input, OnInit, signal, viewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
// import { MatFormField, MatLabel } from '@angular/material/form-field';
// import { MatInput } from '@angular/material/input';
import { FilterComponent } from './filter/filter.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { APP_CONSTANTS } from '@shared/constants';
import { ContactService } from '@features/contacts/contact.service';
import { ModalService } from '@components/modal/modal.service';
import { ModalComponent } from '@components/modal/modal.component';
import { SnackbarService } from '@shared/services/snack-bar.service';
// import { JsonPipe } from '@angular/common';

// Array de módulos de Material utilizados en el componente
const MATMODULES = [
  MatTableModule, 
  MatPaginatorModule, 
  MatSortModule, 
  // MatLabel, 
  // MatFormField, 
  // MatInput, 
  MatIconModule, 
  MatButtonModule
];

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [FilterComponent, MATMODULES], // Importa el componente FilterComponent y los módulos de Material
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent <T> implements OnInit {

  displayedColumns = input.required<string[]>(); // Entrada para las columnas mostradas
  data = input.required<T[]>(); // Entrada para los datos
  sortableColumns = input<string[]>([]); // Entrada para las columnas ordenables

  dataSource = new MatTableDataSource<T>(); // Fuente de datos para la tabla
  valueToFilter = signal(''); // Señal para el valor del filtro
  private readonly _sort = viewChild.required<MatSort>(MatSort); // ViewChild para MatSort
  private readonly _paginator = viewChild.required<MatPaginator>(MatPaginator); // ViewChild para MatPaginator
  private readonly _contactSvc = inject(ContactService); // Inyecta el servicio ContactService
  private readonly _modalSvc = inject(ModalService); // Inyecta el servicio ModalService
  private readonly _snackBarSvc = inject(SnackbarService); // Inyecta el servicio SnackbarService

  constructor() {
    effect(() => {
      if (this.valueToFilter()) {
        this.dataSource.filter = this.valueToFilter(); // Aplica el filtro a la fuente de datos
      } else {
        this.dataSource.filter = ''; // Limpia el filtro
      }

      if (this.data()){
        this.dataSource.data = this.data(); // Actualiza los datos de la fuente de datos
      }
    }, { allowSignalWrites: true });
  }

  ngOnInit(): void {
    this.dataSource.data = this.data(); // Inicializa la fuente de datos con los datos
    this.dataSource.sort = this._sort(); // Inicializa la ordenación
    this.dataSource.paginator = this._paginator(); // Inicializa la paginación
  }

  openEditForm(data: T): void {
    this._modalSvc.openModal<ModalComponent, T>(ModalComponent, data, true);
  }

  deleteContact(id: string): void {
    // Elimina un contacto
    const confirmation = confirm(APP_CONSTANTS.MESSAGES.CONFIRMATION_PROMPT);
    if (confirmation) {
      this._contactSvc.deleteContact(id);
      this._snackBarSvc.showSnackBar(APP_CONSTANTS.MESSAGES.CONTACT_DELETED, 'ok');
    }

  }

}
