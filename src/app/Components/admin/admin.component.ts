import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HospitalModel } from 'src/app/models/hospital.model';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [HospitalService],
})
export class AdminComponent implements OnInit {
  @Input() item = '';
  formValue!: FormGroup;
  hospitalModel: HospitalModel = new HospitalModel();
  hospitalData!: any;
  //showAdd!: boolean;
  //showUpdate!: boolean;
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

  /* clickAddHospital() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  } */

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
        let ref = document.getElementById('cancel');
        ref?.click();
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

  deleteHospital(row: any) {
    this.hospitalService.deleteHospital(row.id).subscribe((res) => {
      alert('Hospital Deleted');
      this.getAllHospitals();
    });
  }

  onEdit(row: any) {
    /*  this.showAdd = false;
    this.showUpdate = true; */

    this.hospitalModel.id = row.id;

    this.formValue.controls['hospitalName'].setValue(row.hospitalName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['location'].setValue(row.location);
    this.formValue.controls['address'].setValue(row.address);
    this.formValue.controls['bedsAvailable'].setValue(row.bedsAvailable);
    this.formValue.controls['ventilation'].setValue(row.ventilation);
    this.formValue.controls['icus'].setValue(row.icus);
    this.formValue.controls['isolationWard'].setValue(row.isolationWard);
  }

  updateHospitalDetails() {
    this.hospitalModel.hospitalName = this.formValue.value.hospitalName;
    this.hospitalModel.email = this.formValue.value.email;
    this.hospitalModel.mobile = this.formValue.value.mobile;
    this.hospitalModel.location = this.formValue.value.location;
    this.hospitalModel.address = this.formValue.value.address;
    this.hospitalModel.bedsAvailable = this.formValue.value.bedsAvailable;
    this.hospitalModel.ventilation = this.formValue.value.ventilation;
    this.hospitalModel.icus = this.formValue.value.icus;
    this.hospitalModel.isolationWard = this.formValue.value.isolationWard;

    this.hospitalService
      .updateHospital(this.hospitalModel, this.hospitalData.id)
      .subscribe(
        (res) => {
          console.log(res);
          alert('Hospital Details Updated successfully..');
          let ref = document.getElementById('cancel');
          ref?.click();
          this.formValue.reset();
          this.getAllHospitals();
        },
        (err) => {
          alert('Something went Wrong');
        }
      );
  }
}
