import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HospitalModel } from 'src/app/models/hospital.model';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-generate-hospital',
  templateUrl: './generate-hospital.component.html',
  styleUrls: ['./generate-hospital.component.css'],
  providers: [HospitalService],
})
export class GenerateHospitalComponent implements OnInit {
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

  postHospitalDetails() {
    this.hospitalModel.hospitalName = this.formValue.value.hospitalName;
    this.hospitalModel.email = this.formValue.value.email;
    this.hospitalModel.mobile = this.formValue.value.mobile;
    this.hospitalModel.location = this.formValue.value.location;
    this.hospitalModel.address = this.formValue.value.address;
    this.hospitalModel.bedsAvailable = this.formValue.value.bedsAvailable;
    this.hospitalModel.ventilation = this.formValue.value.ventilation;
    this.hospitalModel.icus = this.formValue.value.icus;
    this.hospitalModel.isolationWard = this.formValue.value.isolationWard;

    this.hospitalService.createHospital(this.hospitalModel).subscribe(
      (res) => {
        console.log(res);
        alert('Hospital is Added successfully..');
         
        this.formValue.reset();
        this.getAllHospitals();
      },
      (err) => {
        alert('Something went Wrong');
      }
    );
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
