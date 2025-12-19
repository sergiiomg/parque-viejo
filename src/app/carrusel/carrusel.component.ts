import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  @Input() imagenes: string[] = [];

  indiceActual = 0;

siguiente() {
  this.indiceActual =
    (this.indiceActual + 1) % this.imagenes.length;
}

anterior() {
  this.indiceActual =
    (this.indiceActual - 1 + this.imagenes.length) % this.imagenes.length;
}
}
