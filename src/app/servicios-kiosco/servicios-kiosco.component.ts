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

@Component({
  selector: 'app-servicios-kiosco',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios-kiosco.component.html',
  styleUrl: './servicios-kiosco.component.css',
  animations: [
    trigger('fadeSlide', [
      state('hidden', style({ opacity: 0, transform: 'translateY(30px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('600ms ease-out'))
    ])
  ]
})
export class ServiciosKioscoComponent {
servicios = [
    {
      imagen: 'assets/prensa.jpeg',
      titulo: 'Prensa',
      descripcion: 'Descripción breve del servicio número uno.',
      visible: false
    },
    {
      imagen: 'assets/tabaco.jpeg',
      titulo: 'Tabaco',
      descripcion: 'Descripción breve del servicio número dos.',
      visible: false
    },
    {
      imagen: 'assets/paquetes-gominolas.jpeg',
      titulo: 'Paquetes de gominolas',
      descripcion: 'Descripción breve del servicio número tres.',
      visible: false
    },
    {
      imagen: 'assets/pendientes-artesanales.jpeg',
      titulo: 'Pendientes',
      descripcion: 'Descripción breve del servicio número cuatro.',
      visible: false
    },
    {
      imagen: 'assets/snacks.jpeg',
      titulo: 'Snacks',
      descripcion: 'Descripción breve del servicio número cinco.',
      visible: false
    },
    {
      imagen: 'assets/chuches.jpeg',
      titulo: 'Chuches',
      descripcion: 'Descripción breve del servicio número seis.',
      visible: false
    }
  ];

  @ViewChildren('cardRef') cardElements!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = this.cardElements.toArray().findIndex(el => el.nativeElement === entry.target);
          if (index !== -1) this.servicios[index].visible = true;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    this.cardElements.forEach(el => observer.observe(el.nativeElement));
  }
}
