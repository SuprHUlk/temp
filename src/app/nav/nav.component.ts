import { Component, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  @Input() toggle: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    const mobileMenu = document.querySelector('.mobile-menu-btn');
    mobileMenu!.addEventListener('click', () => {
      mobileMenu!.classList.toggle('clicked');
      const mobileNavLinks = document.querySelector('.mobile-nav-links');
      mobileNavLinks?.classList.toggle('clicked');
    });
  }

  goTo(where: string) {
    let element = document.querySelector(where);

    if (!element) {
      this.router.navigate(['/home']).then(() => {
        setTimeout(() => {
          element = document.querySelector(where);

          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            console.error('Element not found:', where);
          }
        }, 100);
      });
    } else {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.header') as HTMLElement;
    if (window.scrollY > 300) {
      element.classList.add('header-inverse');
    } else {
      element.classList.remove('header-inverse');
    }
  }
}
