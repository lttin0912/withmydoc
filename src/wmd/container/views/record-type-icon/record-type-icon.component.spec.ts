import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordTypeIconComponent } from './record-type-icon.component';

describe('RecordTypeIconComponent', () => {
  let component: RecordTypeIconComponent;
  let fixture: ComponentFixture<RecordTypeIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordTypeIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordTypeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
