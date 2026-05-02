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
      imagen: 'assets/torneo.jpeg',
      titulo: 'Torneo Trompos Cometa',
      visible: false,
      tipo: 'normal',
      descripcion: 'Todos los jueves de mayo a las 19:00h, en el parque. Participa en el torneo.'
    },
  {
      imagenes: [
        'assets/TELVA1.jpeg',
        'assets/TELVA2.jpeg',
      ],
      titulo: 'Revista Telva',
      visible: false,
      tipo: 'carrusel',
      descripcion: '¡Con la nueva revista Telva llévate de regalo un serum facial de vitamina C y  ácido hialurónico valorado en 20€! Revista + regalo por 6,95€'
    },
    {
      imagenes: [
        'assets/ELLEBPC (1).jpeg',
        'assets/ELLEBPC (2).jpeg',
        'assets/ELLEBPC (3).jpeg',
        'assets/ELLEBPC (4).jpeg',
      ],
      titulo: 'Revista Elle',
      visible: false,
      tipo: 'carrusel',
      descripcion: '¡Con la nueva revista ELLE llévate de regalo un bolso-pañuelo conturon 3 en 1! Todo por 6,99€'
    },
    {
      imagen: 'assets/2TELVA.jpeg',
      titulo: 'Revista Telva Ampollas',
      visible: false,
      tipo: 'normal',
      descripcion: 'Con esta edición de la revista Telva llévate 2 ampollas efecto flash valoradas en 8€. ¡Por solo 2,50€!'
    },
  {
      imagen: 'assets/cromos-premium.jpeg',
      titulo: 'Ya llegó al kiosco Parque Viejo',
      visible: false,
      tipo: 'normal',
      descripcion: ''
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
    }
    
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
