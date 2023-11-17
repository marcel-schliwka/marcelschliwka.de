import { Component } from '@angular/core';
import { projects } from '../data/projects';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  projects: any = projects;
  test(): void {
    console.log(projects);
  }
  ngOnInit(): void {
    console.log(projects);
  }
}
