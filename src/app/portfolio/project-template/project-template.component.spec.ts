import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTemplateComponent } from './project-template.component';

describe('ProjectTemplateComponent', () => {
  let component: ProjectTemplateComponent;
  let fixture: ComponentFixture<ProjectTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectTemplateComponent]
    });
    fixture = TestBed.createComponent(ProjectTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
