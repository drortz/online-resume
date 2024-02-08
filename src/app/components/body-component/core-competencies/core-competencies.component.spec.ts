import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreCompetenciesComponent } from './core-competencies.component';

describe('CoreCompetenciesComponent', () => {
  let component: CoreCompetenciesComponent;
  let fixture: ComponentFixture<CoreCompetenciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreCompetenciesComponent]
    });
    fixture = TestBed.createComponent(CoreCompetenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
