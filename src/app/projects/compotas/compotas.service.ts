// compotas.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompotasService {
  productos: any[] = [];
  totalGeneral: number = 0;

  calcularDescuento(tipo: string, cantidad: number) {
    let precioUnitario = tipo === "Rostington" ? 5000 : 10000;
    let descuentoPorcentaje;

    if (tipo === "Rostington") {
      descuentoPorcentaje = cantidad <= 100 ? 20 : cantidad <= 200 ? 25 : 45;
    } else {
      descuentoPorcentaje = cantidad <= 100 ? 15 : cantidad <= 200 ? 35 : 50;
    }

    const ventaBruta = precioUnitario * cantidad;
    const descuento = ventaBruta * (descuentoPorcentaje / 100);
    const ventaNeta = ventaBruta - descuento;

    return { ventaBruta, descuento, ventaNeta, descuentoPorcentaje };
  }

  agregarProducto(tipo: string, cantidad: number) {
    if (cantidad > 0) {
      const { ventaBruta, descuento, ventaNeta, descuentoPorcentaje } = this.calcularDescuento(tipo, cantidad);
      this.totalGeneral += ventaNeta;

      const productoExistente = this.productos.find(p => p.tipo === tipo);
      if (productoExistente) {
        productoExistente.cantidad += cantidad;
        productoExistente.descuento += descuento;
        productoExistente.ventaNeta += ventaNeta;
        productoExistente.ventaBruta += ventaBruta;
      } else {
        this.productos.push({ tipo, cantidad, descuentoPorcentaje, descuento, ventaNeta, ventaBruta });
      }
    }
  }

  modificarCantidad(index: number, nuevaCantidad: number) {
    const producto = this.productos[index];
    const tipo = producto.tipo;
    const { descuento, ventaNeta, descuentoPorcentaje } = this.calcularDescuento(tipo, nuevaCantidad);

    this.totalGeneral -= producto.ventaNeta;
    producto.cantidad = nuevaCantidad;
    producto.descuento = descuento;
    producto.ventaNeta = ventaNeta;
    producto.descuentoPorcentaje = descuentoPorcentaje;
    this.totalGeneral += ventaNeta;
  }

  eliminarProducto(index: number) {
    this.totalGeneral -= this.productos[index].ventaNeta;
    this.productos.splice(index, 1);
  }

  finalizarCompra() {
    this.productos = [];
    this.totalGeneral = 0;
  }
}
