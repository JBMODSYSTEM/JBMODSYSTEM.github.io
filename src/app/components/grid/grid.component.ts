import { Component, effect, input, OnInit, signal, viewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FilterComponent } from './filter/filter.component';

const MATMODULES = [MatTableModule, MatPaginatorModule, MatSortModule, MatLabel, MatFormField, MatInput];


@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [FilterComponent, MATMODULES ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent <P> implements OnInit {

  displayedColumns = input.required<string[]>();
  data = input.required<P[]>();

  dataSource = new MatTableDataSource<P>();
  valueToFilter = signal('');
  private readonly _sort = viewChild.required<MatSort>(MatSort);
  private readonly _paginator = viewChild.required<MatPaginator>(MatPaginator);

  constructor() {
    effect(() => {
      if (this.valueToFilter()) {
        this.dataSource.filter = this.valueToFilter().trim().toLowerCase();
      }else{
        this.dataSource.filter = '';
      }
    }, { allowSignalWrites: true });
  }

  ngOnInit(): void {
    this.dataSource.data = this.data()
    this.dataSource.sort = this._sort();
    this.dataSource.paginator = this._paginator();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
