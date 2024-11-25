import { Component, effect, input, OnInit, signal, viewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
// import { MatFormField, MatLabel } from '@angular/material/form-field';
// import { MatInput } from '@angular/material/input';
import { FilterComponent } from './filter/filter.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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

  // Entrada para las columnas mostradas
  displayedColumns = input.required<string[]>(); 
  // Entrada para los datos
  data = input.required<T[]>(); 
  // Entrada para las columnas ordenables
  sortableColumns = input<string[]>([]); 

  // Fuente de datos para la tabla
  dataSource = new MatTableDataSource<T>(); 
  // Señal para el valor del filtro
  valueToFilter = signal(''); 
  // ViewChild para MatSort
  private readonly _sort = viewChild.required<MatSort>(MatSort); 
  // ViewChild para MatPaginator
  private readonly _paginator = viewChild.required<MatPaginator>(MatPaginator); 

  constructor() {
    effect(() => {
      if (this.valueToFilter()) {
        // Aplica el filtro a la fuente de datos
        this.dataSource.filter = this.valueToFilter(); 
      } else {
        // Limpia el filtro
        this.dataSource.filter = ''; 
      }
    }, { allowSignalWrites: true });
  }

  ngOnInit(): void {
    // Inicializa la fuente de datos con los datos
    this.dataSource.data = this.data(); 
    // Inicializa la ordenación
    this.dataSource.sort = this._sort(); 
    // Inicializa la paginación
    this.dataSource.paginator = this._paginator(); 
  }

  // applyFilter(event: Event): void {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   // Aplica el filtro basado en el evento de entrada
  //   this.dataSource.filter = filterValue.trim().toLowerCase(); 
  // }
}
