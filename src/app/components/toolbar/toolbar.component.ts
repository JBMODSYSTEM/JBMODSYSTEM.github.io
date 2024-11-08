import { Component, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [ RouterModule, MatToolbarModule, MatIconModule, MatButtonModule],
  template: `
    <mat-toolbar color="primary">
      <div class="left-section">
        <a routerLink="/" mat-button>
          <mat-icon>home</mat-icon>
          <span>Home</span>
        </a>
      </div>
      <span class="spacer"></span>
      <div class="right-section">
        <a routerLink="/contact" mat-button>
          <mat-icon>contacts</mat-icon>
          <span>Contact</span>
        </a>
        <a routerLink="/" mat-button>
          <mat-icon>info</mat-icon>
          <span>About</span>
        </a>
        <a mat-button (click)="emitClick()">
          <mat-icon>add_box</mat-icon>
          <span>Comentarios</span>
        </a>
      </div>
    </mat-toolbar>
  `,
  styles: ``
})
export class ToolbarComponent {
  onNewContactEvent = output<void>();

  emitClick(): void {
    this.onNewContactEvent.emit();
  }
}
