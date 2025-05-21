import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {


  images = [
    {
      src: 'https://cdn.pixabay.com/photo/2024/09/22/09/39/pantheon-paris-9065570_1280.jpg',
      alt: 'Proyecto Login',
      title: 'Proyecto Login',
      routerLink: '/login',
      description: 'Descripción de la imagen 3.',
      xmlns: 'http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2022/06/07/16/22/drift-7248723_1280.jpg',
      alt: 'facturacion de compotas',
      title: 'Proyecto facturacion compotas',
      routerLink: '/compotas',
      description: 'Descripción de facturacion de compotas.'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2024/10/23/09/00/dorset-9141987_1280.jpg',
      alt: 'calculadora temporal',
      title: 'Proyecto calculadora temporal',
      routerLink: '/calculadoratemp',
      description: 'Descripción calculadora temporal.'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2024/11/02/05/13/winter-9168141_1280.jpg',
      alt: 'Comentarios',
      title: 'Proyecto Comentarios',
      routerLink: '/comentarios',
      description: 'Descripción de la imagen 3.'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2022/12/02/16/52/the-path-7631282_1280.jpg',
      alt: 'Image 4',
      title: 'Image 4',
      routerLink: '/todolist',
      description: 'Descripción de la imagen 4.'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2022/06/07/16/22/drift-7248723_1280.jpg',
      alt: 'Image 5',
      title: 'Imagen 5',
      routerLink: '/monedag',
      description: 'Descripción de la imagen 5.'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2024/05/29/16/49/lizard-8796682_1280.jpg',
      alt: 'Image 6',
      title: 'Imagen 6',
      routerLink: '/',
      description: 'Descripción de la imagen 6.'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2024/10/23/09/00/dorset-9141987_1280.jpg',
      alt: 'Image 7',
      title: 'Imgenen 7',
      routerLink: '/',
      description: 'Descripción de la imagen 7.'
    },


  ]

}
