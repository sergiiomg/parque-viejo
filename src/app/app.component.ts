import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderKioscoComponent } from "./header-kiosco/header-kiosco.component";
import { NovedadesKioscoComponent } from './novedades-kiosco/novedades-kiosco.component';
import { ServiciosKioscoComponent } from './servicios-kiosco/servicios-kiosco.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderKioscoComponent, NovedadesKioscoComponent, ServiciosKioscoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parque-viejo';
}
