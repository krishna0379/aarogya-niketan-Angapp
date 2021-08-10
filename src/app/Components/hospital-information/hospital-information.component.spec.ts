import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalInformationComponent } from './hospital-information.component';

describe('HospitalInformationComponent', () => {
  let component: HospitalInformationComponent;
  let fixture: ComponentFixture<HospitalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
