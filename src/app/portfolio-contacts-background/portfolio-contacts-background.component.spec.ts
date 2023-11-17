import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioContactsBackgroundComponent } from './portfolio-contacts-background.component';

describe('PortfolioContactsBackgroundComponent', () => {
  let component: PortfolioContactsBackgroundComponent;
  let fixture: ComponentFixture<PortfolioContactsBackgroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioContactsBackgroundComponent]
    });
    fixture = TestBed.createComponent(PortfolioContactsBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
