import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';

const MATERIAL_MODULES = [MatCardModule, MatIconModule, MatButtonModule, MatToolbarModule, MatDividerModule, MatFormFieldModule];

@Component({
  selector: 'app-calculadoratemporal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MATERIAL_MODULES],
  templateUrl: './calculadoratemporal.component.html',
  styleUrl: './calculadoratemporal.component.scss'
})
export class CalculadoratemporalComponent {
  form: FormGroup;
  yF?: string;
  yFE?: string;
  showTime: string = "";
  showTime2: string = "";
  actionBtn: string = "Start";
  flag: boolean = false;
  arrayGoles: any[] = [];
  arrayMenosEsquinas: any[] = [];
  selected = '0';
  icon: string = "edit";

  // Arreglos de datos
  dataMenosEsquinas: any[] = [
    { time: 1, 7: 0, 7.5: 0, 8: 0, 8.5: 0, 9: 0, 9.5: 0, 10: 0, 10.5: 0, 11: 0 },
    {},
    {},
    { time: 4, 7: 3.64, 7.5: 3.43, 8: 3.24, 8.5: 3.07, 9: 2.93, 9.5: 2.79, 10: 2.68, 10.5: 2.57, 11: 2.47 },
    { time: 5, 7: 3.03, 7.5: 2.85, 8: 2.71, 8.5: 2.57, 9: 2.46, 9.5: 2.4, 10: 2.31, 10.5: 2.22, 11: 2.14 },
    { time: 6, 7: 2.64, 7.5: 2.49, 8: 2.4, 8.5: 2.29, 9: 2.19, 9.5: 2.1, 10: 2.02, 10.5: 1.94, 11: 1.88 },
    { time: 7, 7: 2.38, 7.5: 2.25, 8: 2.14, 8.5: 2.04, 9: 1.96, 9.5: 1.88, 10: 1.84, 10.5: 1.77, 11: 1.72 },
    { time: 8, 7: 2.15, 7.5: 2.04, 8: 1.94, 8.5: 1.86, 9: 1.81, 9.5: 1.74, 10: 1.68, 10.5: 1.63, 11: 1.58 },
    { time: 9, 7: 1.97, 7.5: 1.87, 8: 1.82, 8.5: 1.75, 9: 1.68, 9.5: 1.62, 10: 1.57, 10.5: 1.54, 11: 1.49 },
    { time: 10, 7: 1.86, 7.5: 1.77, 8: 1.69, 8.5: 1.63, 9: 1.57, 9.5: 1.53, 10: 1.49, 10.5: 1.44, 11: 1.41 },
    { time: 11, 7: 1.74, 7.5: 1.66, 8: 1.59, 8.5: 1.55, 9: 1.49, 9.5: 1.45, 10: 1.41, 10.5: 1.38, 11: 1.34 },
    { time: 12, 7: 1.65, 7.5: 1.57, 8: 1.53, 8.5: 1.47, 9: 1.43, 9.5: 1.38, 10: 1.36, 10.5: 1.32, 11: 1.29 },
    { time: 13, 7: 1.57, 7.5: 1.52, 8: 1.46, 8.5: 1.41, 9: 1.38, 9.5: 1.34, 10: 1.31, 10.5: 1.28, 11: 1.26 },
    { time: 14, 7: 1.52, 7.5: 1.46, 8: 1.41, 8.5: 1.37, 9: 1.33, 9.5: 1.3, 10: 1.28, 10.5: 1.25, 11: 1.22 },
    { time: 15, 7: 1.45, 7.5: 1.4, 8: 1.36, 8.5: 1.32, 9: 1.28, 9.5: 1.26, 10: 1.23, 10.5: 1.21, 11: 1.19 },
    { time: 16, 7: 1.4, 7.5: 1.36, 8: 1.32, 8.5: 1.29, 9: 1.25, 9.5: 1.22, 10: 1.2, 10.5: 1.18, 11: 1.16 },
    { time: 17, 7: 1.37, 7.5: 1.32, 8: 1.29, 8.5: 1.25, 9: 1.22, 9.5: 1.2, 10: 1.18, 10.5: 1.16, 11: 1.14 },
    { time: 18, 7: 1.33, 7.5: 1.29, 8: 1.26, 8.5: 1.22, 9: 1.2, 9.5: 1.18, 10: 1.15, 10.5: 1.14, 11: 1.12 },
    { time: 19, 7: 1.3, 7.5: 1.26, 8: 1.23, 8.5: 1.2, 9: 1.16, 9.5: 1.14, 10: 1.12, 10.5: 1.11, 11: 1.09 },
    { time: 20, 7: 1.28, 7.5: 1.26, 8: 1.21, 8.5: 1.18, 9: 1.16, 9.5: 1.14, 10: 1.12, 10.5: 1.11, 11: 1.09 }
  ];

  datosDirectos: any[] = [
    { time: 0, 2: 0, 2.5: 0, 3: 0, 3.5: 0, 4: 0 },
    {},
    {},
    { time: 4, 2: 10.86, 2.5: 8.83, 3: 7.53, 3.5: 6.54, 4: 5.82 },
    { time: 5, 2: 8.79, 2.5: 7.17, 3: 6.13, 3.5: 5.34, 4: 4.76 },
    { time: 6, 2: 7.41, 2.5: 6.06, 3: 5.2, 3.5: 4.54, 4: 4.06 },
    { time: 7, 2: 6.43, 2.5: 5.27, 3: 4.53, 3.5: 3.97, 4: 3.56 },
    { time: 8, 2: 5.69, 2.5: 4.68, 3: 4.03, 3.5: 3.54, 4: 3.18 },
    { time: 9, 2: 5.12, 2.5: 4.22, 3: 3.65, 3.5: 3.21, 4: 2.89 },
    { time: 10, 2: 4.66, 2.5: 3.85, 3: 3.34, 3.5: 2.94, 4: 2.66 },
    { time: 11, 2: 4.28, 2.5: 3.55, 3: 3.09, 3.5: 2.73, 4: 2.47 },
    { time: 12, 2: 3.97, 2.5: 3.3, 3: 2.88, 3.5: 2.55, 4: 2.31 },
    { time: 13, 2: 3.71, 2.5: 3.09, 3: 2.7, 3.5: 2.4, 4: 2.18 },
    { time: 14, 2: 3.48, 2.5: 2.91, 3: 2.55, 3.5: 2.27, 4: 2.07 },
    { time: 15, 2: 3.29, 2.5: 2.76, 3: 2.42, 3.5: 2.16, 4: 1.97 },
    { time: 16, 2: 3.12, 2.5: 2.62, 3: 2.3, 3.5: 2.06, 4: 1.89 },
    { time: 17, 2: 2.97, 2.5: 2.5, 3: 2.2, 3.5: 1.98, 4: 1.81 },
    { time: 18, 2: 2.84, 2.5: 2.39, 3: 2.11, 3.5: 1.9, 4: 1.75 },
    { time: 19, 2: 2.72, 2.5: 2.3, 3: 2.03, 3.5: 1.83, 4: 1.69 },
    { time: 20, 2: 2.61, 2.5: 2.21, 3: 1.96, 3.5: 1.77, 4: 1.64 }
  ];

  constructor(private fb: FormBuilder) {
    // Inicializa el formulario con validaciones
    this.form = this.fb.group({
      minutos: [70, [Validators.required, Validators.min(70), Validators.max(89)]],
      golesEscogidos: ["0", Validators.required],
      golesMenosEsquinas: ["0", Validators.required],
      extraTime: ["0"],
      segundos: [0, [Validators.required, Validators.min(0), Validators.max(59)]]
    });
  }

  ngOnInit(): void {
    // Llama a las funciones para poblar los arreglos
    this.getArrayGoles();
    this.getArrayMenosEsquinas();
  }

  // Llena arrayGoles con las claves ordenadas de datosDirectos
  getArrayGoles() {
    let ob = this.datosDirectos[0];
    this.arrayGoles = Object.keys(ob).sort();
    this.arrayGoles.pop();
  }

  // Llena arrayMenosEsquinas con las claves ordenadas de dataMenosEsquinas
  getArrayMenosEsquinas() {
    let ob = this.dataMenosEsquinas[0];
    this.arrayMenosEsquinas = Object.keys(ob).sort();
    this.arrayMenosEsquinas.pop();
    let last = this.arrayMenosEsquinas.pop();
    this.arrayMenosEsquinas.unshift(last);
  }

  // Maneja el envío del formulario
  submitForm() {
    if (this.form.invalid) return;
    this.hallarGol();
  }

  // Calcula goles y esquinas
  hallarGol() {
    this.cambiarFlag();
    const x = 60;
    let esquinas = this.form.value.golesMenosEsquinas;
    let goles = this.form.value.golesEscogidos,
      segundos = 60 - this.form.value.segundos,
      minutos = 89 + parseInt(this.form.value.extraTime) - this.form.value.minutos,
      minutos2 = this.form.value.minutos,
      segundos2 = this.form.value.segundos;
    let y1 = 0, y2 = 0, b = 0;
    let y2E = 0, y1E = 0, bE = 0;

    if (this.flag) {
      this.actionBtn = 'Stop';
    } else {
      this.actionBtn = 'Start';
    }

    setInterval(() => {
      if (minutos == 20 && segundos == 0) {
        y2 = this.datosDirectos[minutos][goles];
        y1 = this.datosDirectos[minutos - 1][goles];
        y2E = this.dataMenosEsquinas[minutos][esquinas];
        y1E = this.dataMenosEsquinas[minutos - 1][esquinas];
      }
      if (minutos < 20 && minutos >= 4) {
        y2 = this.datosDirectos[minutos][goles];
        y1 = this.datosDirectos[minutos - 1][goles];
        y2E = this.dataMenosEsquinas[minutos][esquinas];
        y1E = this.dataMenosEsquinas[minutos - 1][esquinas];
      }
      if (minutos < 5) {
        y2 = this.datosDirectos[minutos][goles];
        y2E = this.dataMenosEsquinas[minutos][esquinas];
        y1E = this.dataMenosEsquinas[3][esquinas];
        y1 = this.datosDirectos[3][goles];
      }

      let m = (y2 - y1) / x;
      b = y2 - m * x;

      let mE = (y2E - y1E) / x;
      bE = y2E - mE * x;

      if (segundos >= 0 && minutos >= 4) {
        if (!this.flag) {
          segundos = 0;
          minutos = 4;
        }
        if (segundos == 0 && minutos == 4) return;

        this.yF = (m * segundos + b).toFixed(2);
        this.yFE = (mE * segundos + bE).toFixed(2);
        segundos -= 1;
        this.showTime = `${minutos} : ${segundos}`;

        if (segundos == 0) {
          if (segundos == 0 && minutos == 4) return;
          minutos -= 1;
          segundos = 60;
        }
      }

      if (segundos2 >= 0 && minutos2 >= 4) {
        if (!this.flag) {
          segundos2 = 0;
          minutos2 = 4;
        }
        if (segundos2 == 60 && minutos2 == 4) return;
        segundos2 += 1;
        this.showTime2 = `${minutos2} : ${segundos2}`;

        if (segundos2 == 60) {
          if (segundos2 == 0 && minutos == 0) return;
          minutos2 += 1;
          segundos2 = 0;
        }
      }
    }, 1000);
  }

  // Cambia el valor de la bandera
  cambiarFlag() {
    this.flag = !this.flag;
  }

  // Cambia el nombre y el icono
  changeName() {
    let $inputTitle = document.querySelector(".title-4")!;
    if ($inputTitle.toggleAttribute("disabled")) {
      this.icon = "edit";
    } else {
      this.icon = "save";
    }
  }
}
