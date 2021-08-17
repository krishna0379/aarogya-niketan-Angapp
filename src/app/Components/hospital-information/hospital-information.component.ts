import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HospitalModel } from 'src/app/models/hospital.model';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-hospital-information',
  templateUrl: './hospital-information.component.html',
  styleUrls: ['./hospital-information.component.css'],
  providers: [HospitalService],
})
export class HospitalInformationComponent implements OnInit {
  
  formValue!: FormGroup;
  hospitalModel: HospitalModel = new HospitalModel();
  hospitalData!: any;

  constructor(
    private formbuilder: FormBuilder,
    private hospitalService: HospitalService
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
        `{Id: ${row.id} \n Name: ${row.name} \n Email: ${row.email} \n Username: ${row.userName}}`
      );
    });
  }
}
