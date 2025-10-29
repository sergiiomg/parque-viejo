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
  selector: 'app-novedades-kiosco',
  standalone: true,
  imports: [CommonModule],
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
      imagen: 'assets/imagen-prueba.png',
      titulo: 'Título 1',
      descripcion: 'Descripción breve de la novedad número uno.',
      visible: false
    },
    {
      imagen: 'assets/imagen-prueba.png',
      titulo: 'Título 2',
      descripcion: 'Descripción breve de la novedad número dos.',
      visible: false
    },
    {
      imagen: 'assets/imagen-prueba.png',
      titulo: 'Título 3',
      descripcion: 'Descripción breve de la novedad número tres.',
      visible: false
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
