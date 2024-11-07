import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

const MATERIAL_MODULES = [MatToolbarModule, MatIconModule, MatButtonModule];

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterModule, CommonModule, MATERIAL_MODULES],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  onNewContactEvent = output<void>();

  emitClick(): void {
    this.onNewContactEvent.emit();
  }
}
