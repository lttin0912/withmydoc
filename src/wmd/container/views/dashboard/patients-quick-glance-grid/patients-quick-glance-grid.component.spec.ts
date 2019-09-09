import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsQuickGlanceGridComponent } from './patients-quick-glance-grid.component';

describe('PatientsQuickGlanceGridComponent', () => {
  let component: PatientsQuickGlanceGridComponent;
  let fixture: ComponentFixture<PatientsQuickGlanceGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsQuickGlanceGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsQuickGlanceGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
