import { Component , signal} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = signal(false); // Signal pour gérer l'état du menu

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen()); // Basculer l'état du menu
  }

  closeMenu() {
    this.isMenuOpen.set(false); // Fermer le menu après un clic sur un lien
  }
}
