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
      imagen: 'assets/COSMOPOLITANJUNIO.jpeg',
      titulo: 'Revista Cosmopolitan Junio',
      visible: false,
      tipo: 'normal',
      descripcion: 'La revista incluye un acondicionador restore y un libro de Megan Maxwell por solo 5,90€. ¡No te lo pierdas!'
    },
  {
      imagenes: [
        'assets/TELVAJUNIO.jpeg',
        'assets/TELVAJUNIO2.jpeg',
      ],
      titulo: 'Revista Telva Junio',
      visible: false,
      tipo: 'carrusel',
      descripcion: 'La revista Telva de junio incluye una crema antimanchas y un bolso XXL por 6,95€. ¡Cómpralo ya!'
    },
  {
      imagen: 'assets/INSTYLEJUNIO.jpeg',
      titulo: 'Revista InStyle Junio',
      visible: false,
      tipo: 'normal',
      descripcion: 'La revista InStyle de junio incluye 2 revistas + bolso capazo por 10€. ¡Cómpralo ya!'
    },
  {
      imagen: 'assets/WOMANJUNIO.jpeg',
      titulo: 'Revista Woman Junio',
      visible: false,
      tipo: 'normal',
      descripcion: 'La revista Woman de junio incluye un neceser y un protector solar de regalo. ¡No te lo pierdas!'
    },
  {
      imagen: 'assets/ELLEJUNIO.jpeg',
      titulo: 'Revista Elle Junio',
      visible: false,
      tipo: 'normal',
      descripcion: ''
    },
  {
      imagen: 'assets/VARIASJUNIO.jpeg',
      titulo: 'ELLE y VOGUE Junio',
      visible: false,
      tipo: 'normal',
      descripcion: ''
    },
  {
      imagen: 'assets/cromos-premium.jpeg',
      titulo: 'Ya llegó al kiosco Parque Viejo',
      visible: false,
      tipo: 'normal',
      descripcion: ''
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
