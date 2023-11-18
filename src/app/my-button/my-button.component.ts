import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss'],
})
export class MyButtonComponent {
  @Input() text: string;
  @Input() href: string;
}
