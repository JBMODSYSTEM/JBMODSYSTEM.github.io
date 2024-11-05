// compotas.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompotasService } from './compotas.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-compotas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './compotas.component.html',
  styleUrls: ['./compotas.component.scss'],
})
export class CompotasComponent {
  tipoSeleccionado: string = 'Rostington';
  cantidad: number = 1;
  total_general: number = 0;
  showModal: boolean = false;
  currentDate: Date = new Date();

  constructor(public compotasService: CompotasService) {}

  agregarProducto() {
    this.compotasService.agregarProducto(this.tipoSeleccionado, this.cantidad);
    this.cantidad = 1; // Resetea la cantidad
  }

  modificarCantidad(index: number, nuevaCantidad: number) {
    this.compotasService.modificarCantidad(index, nuevaCantidad);
  }

  eliminarProducto(index: number) {
    this.compotasService.eliminarProducto(index);
  }

  finalizarCompra() {
    this.compotasService.finalizarCompra();
  }

    // Función para abrir el modal
    openModal() {
      console.log('cantidad de productos: ',this.compotasService.productos.length)
      console.log('Tipos:',this.tipoSeleccionado)
      console.log('openModal');
      this.showModal = true;
    }
  
    // Función para cerrar el modal
    closeModal() {
      this.showModal = false;
    }
  
    // Función para "Nueva Compra"
    nuevaCompra() {
      this.compotasService.productos = [];
      this.compotasService.totalGeneral = 0;
      this.closeModal();
    }
  
    // Función para "Imprimir y Finalizar"
    imprimirYFinalizar() {
      window.print();  // Esto abrirá la opción de impresión
      
      this.nuevaCompra();  // Limpia los datos después de imprimir
    }
}
