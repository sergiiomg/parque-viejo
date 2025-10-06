import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderKioscoComponent } from "./header-kiosco/header-kiosco.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderKioscoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parque-viejo';
}
