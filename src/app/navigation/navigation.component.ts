import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  openMobileMenu(event) {
    console.log(event);
    const mobileMenu: HTMLElement = document.querySelector('.mobile__nav');
    const openMenuBtn: HTMLElement = event.target;

    mobileMenu.classList.toggle('animation__nav_in');
    openMenuBtn.classList.toggle('animation__close_mobile');
  }
}
