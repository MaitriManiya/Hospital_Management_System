import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPagesComponent } from './patient-pages.component';

describe('PatientPagesComponent', () => {
  let component: PatientPagesComponent;
  let fixture: ComponentFixture<PatientPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
