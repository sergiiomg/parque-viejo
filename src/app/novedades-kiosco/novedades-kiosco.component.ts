import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  state
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import  { CarruselComponent} from '../carrusel/carrusel.component';

@Component({
  selector: 'app-novedades-kiosco',
  standalone: true,
  imports: [CommonModule, CarruselComponent],
  templateUrl: './novedades-kiosco.component.html',
  styleUrl: './novedades-kiosco.component.css',
  animations: [
    trigger('fadeSlide', [
      state('hidden', style({ opacity: 0, transform: 'translateY(30px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('600ms ease-out'))
    ])
  ]
})
export class NovedadesKioscoComponent {
novedades = [
  {
      imagenes: [
        'assets/cromos (1).jpeg',
        'assets/cromos (2).jpeg',
        'assets/cromos (3).jpeg',
        'assets/cromos (4).jpeg',
      ],
      titulo: 'Cromos Adrenalyn 2025-2026',
      visible: false,
      tipo: 'carrusel',
      descripcion: ''
    },
  {
      imagen: 'assets/revista-febrero (2).png',
      titulo: 'Revista Woman',
      visible: false,
      tipo: 'normal',
      descripcion: 'La revista Woman (6,50€) del mes de febrero ya está a la venta! Como regalo tenemos una agenda 2026 con 12 ilustraciones de Jorge Arévalo. Viene además con una mini talla de la máscara de pestañas Bad dal Bang de Benefit.'
    },
  {
      imagen: 'assets/revista-febrero (3).png',
      titulo: 'Revista Telva',
      visible: false,
      tipo: 'normal',
      descripcion: 'Ya está aquí la revista Telva del mes de febrero! Por el precio de 6,50€ tenemos de regalo este mes el contorno de ojos de Alma Secret en tamaño de 10ml.'
    },
  {
      imagen: 'assets/revista-febrero (1).png',
      titulo: 'Revista Harper´s Bazar',
      visible: false,
      tipo: 'normal',
      descripcion: 'Este mes la revista Harper´s Bazar cuesta 5,95€ y de regalo trae Lip Boom o Intense Kisses de MUA Make Up.'
    },
    {
      imagen: 'assets/elle.jpg',
      titulo: 'Revista Elle',
      visible: false,
      tipo: 'normal',
      descripcion: 'En la revista grande de ELLE por 6,50€ traerá unos saquitos de la Fundación Aladina y una crema hidratante corporal con esferas de vaquer, en formato 250ml.'
    },
    {
      imagen: 'assets/adrenalyn.png',
      titulo: 'Adrenalyn',
      visible: false,
      tipo: 'normal',
      descripcion: 'Mañana jueves 8 llegan los cromos de Adrenalyn. Y el viernes 9 llegará el álbum. ¡Reserva el tuyo ya!'
    },
    {
      imagenes: [
        'assets/revista-calendario.jpeg',
        'assets/revista-calendario2.jpeg',
        'assets/revista-calendario3.jpeg',
        'assets/revista-calendario4.jpeg',
        'assets/revista-calendario5.jpeg',
        'assets/revista-calendario6.jpeg',
      ],
      titulo: 'Revista con calendario 2026',
      visible: false,
      tipo: 'carrusel',
      descripcion: 'Han llegado las revistas mensuales con regalo de agenda 2026 ¡No te quedes sin la tuya!'
    },
    
  ];
  @ViewChildren('cardRef') cardElements!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = this.cardElements.toArray().findIndex(el => el.nativeElement === entry.target);
          if (index !== -1) this.novedades[index].visible = true;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    this.cardElements.forEach(el => observer.observe(el.nativeElement));
  }
}
