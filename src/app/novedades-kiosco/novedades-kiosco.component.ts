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
      imagen: 'assets/cromos-premium.jpeg',
      titulo: 'Ya llegó al kiosco Parque Viejo',
      visible: false,
      tipo: 'normal',
      descripcion: ''
    },
  {
      imagen: 'assets/telva.jpeg',
      titulo: 'Revista Telva',
      visible: false,
      tipo: 'normal',
      descripcion: 'Precio: 6,95€. Incluye un regalo valorado en 20€. ¡No te lo pierdas!'
    },
    {
      imagen: 'assets/elle.jpeg',
      titulo: 'Revista Elle',
      visible: false,
      tipo: 'normal',
      descripcion: 'Precio: 6,50€. ¡No te quedes sin la tuya!'
    },
    {
      imagen: 'assets/sabervivir.jpeg',
      titulo: 'Revista Saber Vivir',
      visible: false,
      tipo: 'normal',
      descripcion: 'Precio: 7€. ¡Cuidate con esta revista!'
    },
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
      imagen: 'assets/adrenalyn.png',
      titulo: 'Adrenalyn',
      visible: false,
      tipo: 'normal',
      descripcion: 'Mañana jueves 8 llegan los cromos de Adrenalyn. Y el viernes 9 llegará el álbum. ¡Reserva el tuyo ya!'
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
