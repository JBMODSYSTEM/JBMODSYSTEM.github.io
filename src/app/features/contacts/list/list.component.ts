import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { GridComponent } from '@components/grid/grid.component';
import { ColumnKeys, Contact } from '../contacts.interfaces';
import { ContactService } from '../contact.service';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [GridComponent], // Importa el componente GridComponent
  template: `
    <!-- <h1>Contacts</h1> -->
    <section>
      @if(data) {
        <app-grid [displayedColumns]="displayedColumns" [data]="data" [sortableColumns]="sortables" />
      }
    </section>
  `,
})
export class ListComponent implements OnInit{
  data!: Contact[]; // Asigna los datos de ejemplo a la propiedad data
  displayedColumns: ColumnKeys<Contact> = ['id', 'name', 'phone', 'email', 'action']; // Columnas que se mostrarán en la tabla
  sortables: ColumnKeys<Contact> = ['id', 'name', 'phone', 'email']; // Columnas que se pueden ordenar
  
  private readonly _contactSvc = inject(ContactService); // Inyecta el servicio ContactService
  private readonly _destroyRef = inject(DestroyRef); // Referencia de destrucción


  ngOnInit(): void {
    // console.log('List component initialized');
    this.getAllContacts();
  }


  getAllContacts() {
    this._contactSvc.getAllContacts()
      .pipe(
        takeUntilDestroyed(this._destroyRef),
        tap((contacts: Contact[]) => this.data = [...contacts])
      )
    .subscribe()
  }
}
