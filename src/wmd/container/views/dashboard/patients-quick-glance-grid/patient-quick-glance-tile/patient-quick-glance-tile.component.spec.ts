import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientQuickGlanceTileComponent } from './patient-quick-glance-tile.component';

describe('PatientQuickGlanceTileComponent', () => {
  let component: PatientQuickGlanceTileComponent;
  let fixture: ComponentFixture<PatientQuickGlanceTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientQuickGlanceTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientQuickGlanceTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
