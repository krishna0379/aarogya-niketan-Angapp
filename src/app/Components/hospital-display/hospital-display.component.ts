import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HospitalModel } from 'src/app/models/hospital.model';
import { BookingService } from 'src/app/services/booking.service';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-hospital-display',
  templateUrl: './hospital-display.component.html',
  styleUrls: ['./hospital-display.component.css'],
  providers: [HospitalService, BookingService],
})
export class HospitalDisplayComponent implements OnInit {
  formValue!: FormGroup;
  hospitalModel: HospitalModel = new HospitalModel();
  hospitalData!: any;

  constructor(
    private formbuilder: FormBuilder,
    private hospitalService: HospitalService,
    private bookingservice: BookingService
  ) {}

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      hospitalName: [''],
      email: [''],
      mobile: [''],
      location: [''],
      address: [''],
      bedsAvailable: [''],
      ventilation: [''],
      icus: [''],
      isolationWard: [''],
    });
    this.getAllHospitals();
  }

  getAllHospitals() {
    this.hospitalService.getAllHospitals().subscribe((res) => {
      this.hospitalData = res;
    });
  }

  getHospitalById(row: any) {
    this.hospitalService.getHospitalById(row.id).subscribe((res) => {
      alert(
        `{Id: ${row.id} \n
         Name: ${row.hospitalName} \n 
         Email: ${row.email} \n 
         Mobile: ${row.mobile} \n
         Location:${row.location} \n
         BedsAvailable:${row.bedsAvailable} \n
         Address:${row.address} \n
         ICU's:${row.icus} \n
         Ventilations:${row.ventilation} \n
         IsolationWard:${row.isolationWard} \n
        }`
      );
    });
  }
  
}
