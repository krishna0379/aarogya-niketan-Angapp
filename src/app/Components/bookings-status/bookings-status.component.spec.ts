import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsStatusComponent } from './bookings-status.component';

describe('BookingsStatusComponent', () => {
  let component: BookingsStatusComponent;
  let fixture: ComponentFixture<BookingsStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingsStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
