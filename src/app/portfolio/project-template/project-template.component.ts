import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-template',
  templateUrl: './project-template.component.html',
  styleUrls: ['./project-template.component.scss'],
})
export class ProjectTemplateComponent {
  @Input() data: {};
  @Input() isOdd: boolean;
}
