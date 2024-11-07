import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CompotasComponent } from "./projects/compotas/compotas.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { PrincipalComponent } from "./components/principal/principal.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { MatCardModule } from '@angular/material/card';
const MATERIAL_MODULES = [MatCardModule];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CompotasComponent, NavbarComponent, PrincipalComponent, ToolbarComponent, MATERIAL_MODULES],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  onClickNewContact(): void {
    console.log('New contact clicked');
  }
}
