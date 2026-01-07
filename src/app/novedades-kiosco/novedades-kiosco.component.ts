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
      imagen: 'assets/adrenalyn.png',
      titulo: 'Adrenalyn',
      visible: false,
      tipo: 'normal',
      descripcion: 'Mañana jueves 8 llegan los cromos de Adrenalyn. Y el viernes 9 llegará el álbum. ¡Reserva el tuyo ya!'
    },
    {
      imagen: 'assets/bandeja-chuches.jpeg',
      titulo: 'Bandeja de golosinas',
      visible: false,
      tipo: 'normal'
    },
    {
      imagenes: [
        'assets/revoltijos-neceser.jpeg',
        'assets/revoltijos-neceser2.jpeg'
      ],
      titulo: 'Revoltijos neceser',
      visible: false,
      tipo: 'carrusel'
    },
    {
      imagen: 'assets/bolsa-papanoel.jpeg',
      titulo: 'Revoltijos personalizados',
      visible: false,
      tipo: 'normal'
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
    {
      imagen: 'assets/bolsas-navidad.jpeg',
      titulo: 'Revoltijos navideños',
      visible: false,
      tipo: 'normal'
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
