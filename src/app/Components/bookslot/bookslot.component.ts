import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookingModel } from 'src/app/models/booking.model';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-bookslot',
  templateUrl: './bookslot.component.html',
  styleUrls: ['./bookslot.component.css'],
  providers: [BookingService],
})
export class BookslotComponent implements OnInit {
  formValue!: FormGroup;
  bookingModel: BookingModel = new BookingModel();
  bookingData!: any;

  constructor(
    private formbuilder: FormBuilder,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      patientName: [''],
      mobile: [''],
      age: [''],
      beds: [''],
    });
  }
  postBookingDetails() {
    this.bookingModel.patientName = this.formValue.value.patientName;
    this.bookingModel.age = this.formValue.value.age;
    this.bookingModel.beds = this.formValue.value.beds;
    this.bookingModel.mobile = this.formValue.value.mobile;

    this.bookingService.createBooking(this.bookingModel).subscribe(
      (res) => {
        console.log(res);
        alert(' Booking Updated');
        this.formValue.reset();
      },
      (err) => {
        alert('something Went Wrong');
      }
    );
  }
}
