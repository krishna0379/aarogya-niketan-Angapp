import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateHospitalComponent } from './generate-hospital.component';

describe('GenerateHospitalComponent', () => {
  let component: GenerateHospitalComponent;
  let fixture: ComponentFixture<GenerateHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
