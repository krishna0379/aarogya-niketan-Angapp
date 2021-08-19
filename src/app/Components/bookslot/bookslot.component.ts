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
    });
    this.getAllBookings();
  }
  postBookingDetails() {
    this.bookingModel.patientName = this.formValue.value.patientName;

    this.bookingModel.mobile = this.formValue.value.mobile;

    this.bookingService.createBooking(this.bookingModel).subscribe(
      (res) => {
        console.log(res);
        alert(' Booking Updated');
        this.formValue.reset();
        this.getAllBookings();
      },
      (err) => {
        alert('something Went Wrong');
      }
    );
  }

  getAllBookings() {
    this.bookingService.getAllBookings().subscribe((res) => {
      this.bookingData = res;
    });
  }

  getBookingById(row: any) {
    this.bookingService.getBookingById(row.id).subscribe((res) => {
      alert(`{Id: ${row.id}\n Username: ${row.patientName}}`);
    });
  }

  deleteBooking(row: any) {
    this.bookingService.deleteBooking(row.id).subscribe((res) => {
      alert('User Deleted');
      this.getAllBookings();
    });
  }

  onEdit(row: any) {
    this.bookingModel.id = row.id;

    this.formValue.controls['patientName'].setValue(row.patientName);

    this.formValue.controls['mobile'].setValue(row.mobile);
  }

  updateBookingDetails() {
    this.bookingModel.patientName = this.formValue.value.name;
    this.bookingModel.mobile = this.formValue.value.mobile;
    this.bookingService
      .updateBooking(this.bookingModel, this.bookingModel.id)
      .subscribe((res) => {
        alert('User Details Updated');
        this.formValue.reset();
        this.getAllBookings();
      });
  }
}