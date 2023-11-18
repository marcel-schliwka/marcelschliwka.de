import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  openMobileMenu(event) {
    const mobileMenu: HTMLElement = document.querySelector('.mobile__nav');
    const openMenuBtn: HTMLElement = document.querySelector('#openMobileMenu');

    mobileMenu.classList.toggle('animation__nav_in');
    openMenuBtn.classList.toggle('animation__close_mobile');
  }
}
