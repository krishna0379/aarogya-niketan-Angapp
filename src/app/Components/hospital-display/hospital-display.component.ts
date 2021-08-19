import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HospitalModel } from 'src/app/models/hospital.model';

import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-hospital-display',
  templateUrl: './hospital-display.component.html',
  styleUrls: ['./hospital-display.component.css'],
  providers: [HospitalService],
})
export class HospitalDisplayComponent implements OnInit {
  formValue!: FormGroup;
  hospitalModel: HospitalModel = new HospitalModel();
  hospitalData!: any;
  @Input()
  hospitalLocation: string = '';

  constructor(private hospitalService: HospitalService) {}

  ngOnInit(): void {
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
  getHospitalByLocation() {
    //this.hospitalLocation = this.formValue.value.hospitallocation;
    //this.hospitalLocation = 'Bhimavaram';
   //console.log(this.formValue.value);
    console.log(this.hospitalLocation);
    this.hospitalService
      .getHospitalByLocation(this.hospitalLocation)
      .subscribe((res) => {
        this.hospitalData = res;
        console.log(res);
      });
  }
}
