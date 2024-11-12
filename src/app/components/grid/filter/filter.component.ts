import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

const MATMODULES = [MatFormField, MatInput, MatLabel];

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, MATMODULES ],
  template: `
    <mat-form-field>
        <mat-label>{{label()}}</mat-label>
        <input matInput type="text" [(ngModel)]="filter" [placeholder]="placeholder()">
    </mat-form-field>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
  filter = model('');
  label = input<string>('Filter');
  placeholder = input<string>('Search...');

}
