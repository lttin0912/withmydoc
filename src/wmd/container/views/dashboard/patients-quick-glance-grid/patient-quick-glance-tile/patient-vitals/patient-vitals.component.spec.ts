import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientVitalsComponent } from './patient-vitals.component';

describe('PatientVitalsComponent', () => {
  let component: PatientVitalsComponent;
  let fixture: ComponentFixture<PatientVitalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientVitalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientVitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
