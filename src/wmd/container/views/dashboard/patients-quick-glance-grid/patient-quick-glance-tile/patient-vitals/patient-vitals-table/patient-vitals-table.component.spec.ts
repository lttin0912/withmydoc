import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientVitalsTableComponent } from './patient-vitals-table.component';

describe('PatientVitalsTableComponent', () => {
  let component: PatientVitalsTableComponent;
  let fixture: ComponentFixture<PatientVitalsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientVitalsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientVitalsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
