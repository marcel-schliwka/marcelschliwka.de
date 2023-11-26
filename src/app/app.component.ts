import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'marcelschliwka.de';

  ngOnInit() {
    Aos.init({
      startEvent: 'DOMContentLoaded',
      once: false,
    });
  }
}
