import { Component } from '@angular/core';

@Component({
  selector: 'app-header-kiosco',
  standalone: true,
  imports: [],
  templateUrl: './header-kiosco.component.html',
  styleUrl: './header-kiosco.component.css'
})
export class HeaderKioscoComponent {
  menuOpen = false;
  
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
}
