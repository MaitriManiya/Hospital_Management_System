import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPagesComponent } from './doctor-pages.component';

describe('DoctorPagesComponent', () => {
  let component: DoctorPagesComponent;
  let fixture: ComponentFixture<DoctorPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
