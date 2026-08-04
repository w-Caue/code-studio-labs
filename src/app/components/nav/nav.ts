import { Component, HostListener } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-nav',
  imports: [Sidebar],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  scrolled = false;

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }

}
