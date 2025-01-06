import { Component, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatIconModule, MatButtonModule],
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
        @if (isContactRoute) {
          <a mat-button (click)="emitClick()">
            <mat-icon>add_box</mat-icon>
            <span>Comentarios</span>
          </a>
        }
        <!-- <a *ngIf="isContactRoute" mat-button (click)="emitClick()">
          <mat-icon>add_box</mat-icon>
          <span>Comentarios</span>
        </a> -->
      </div>
    </mat-toolbar>
  `,
  styles: ``
})
export class ToolbarComponent {
  @Output() onNewContactEvent = new EventEmitter<void>();
  isContactRoute = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isContactRoute = this.router.url === '/comentarios';
    });
  }

  emitClick(): void {
    this.onNewContactEvent.emit();
  }
}