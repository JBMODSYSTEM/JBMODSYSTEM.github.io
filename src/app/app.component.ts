import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalService } from '@components/modal/modal.service';
import { FormsModule } from '@angular/forms';
import { CompotasComponent } from "./projects/compotas/compotas.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { PrincipalComponent } from "./components/principal/principal.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { MatCardModule } from '@angular/material/card';
import { ModalComponent } from '@components/modal/modal.component';
// import { Contact } from '@features/contacts/contacts.interfaces';
const MATERIAL_MODULES = [MatCardModule];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CompotasComponent, NavbarComponent, PrincipalComponent, ToolbarComponent, MATERIAL_MODULES],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  private readonly _modalSvc = inject(ModalService);

  onClickNewContact(): void {
    this._modalSvc.openModal<ModalComponent>(ModalComponent);
  }
}
