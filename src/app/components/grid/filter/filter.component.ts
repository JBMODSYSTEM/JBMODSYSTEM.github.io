import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

// Array de módulos de Material utilizados en el componente
const MATMODULES = [MatFormField, MatInput, MatLabel];

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, MATMODULES], // Importa FormsModule y los módulos de Material
  template: `
    <mat-form-field>
        <mat-label>{{label()}}</mat-label>
        <input matInput type="text" [(ngModel)]="filter" [placeholder]="placeholder()">
    </mat-form-field>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
  filter = model(''); // Modelo para la entrada del filtro
  label = input<string>('Filter'); // Entrada para la etiqueta
  placeholder = input<string>('Search...'); // Entrada para el marcador de posición
}
