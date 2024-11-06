import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CompotasComponent } from "./projects/compotas/compotas.component";
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { PrincipalComponent } from "./componentes/principal/principal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CompotasComponent, NavbarComponent, PrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  scrolled = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrolled = window.pageYOffset > 0;
  }
}
