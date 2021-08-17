import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { HospitalModal } from './adimin.hospital.model';
 
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  
    formValue!: FormGroup;
  hospitalModalObj: HospitalModal = new HospitalModal();
  hospitalData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  constructor(private formbuilder: FormBuilder, private api: ApiService) {}

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
    this.getAllHospital();
  }

  clickAddHospital() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postHospitalDetails() {
    this.hospitalModalObj.hospitalName = this.formValue.value.hospitalName;
    this.hospitalModalObj.email = this.formValue.value.email;
    this.hospitalModalObj.mobile = this.formValue.value.mobile;
    this.hospitalModalObj.location = this.formValue.value.location;
    this.hospitalModalObj.address = this.formValue.value.address;
    this.hospitalModalObj.bedAvailable = this.formValue.value.bedsAvailable;
    this.hospitalModalObj.ventilation = this.formValue.value.ventilation;
    this.hospitalModalObj.icus = this.formValue.value.icus;
    this.hospitalModalObj.isolationWard = this.formValue.value.isolationWard;

    this.api.postHospital(this.hospitalModalObj).subscribe(
      (res) => {
        console.log(res);
        alert('Hospital is Added successfully..');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllHospital();
      },
      (err) => {
        alert('Something went Wrong');
      }
    );
  }
  getAllHospital() {
    this.api.getHospital().subscribe((res) => {
      this.hospitalData = res;
    });
  }
  deleteHospital(row: any) {
    this.api.deleteHospital(row.id).subscribe((res) => {
      alert('Hospital Deleted');
      this.getAllHospital();
    });
  }
  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;

    this.hospitalModalObj.id = row.id;
    
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
    this.hospitalModalObj.hospitalName = this.formValue.value.hospitalName;
    this.hospitalModalObj.email = this.formValue.value.email;
    this.hospitalModalObj.mobile = this.formValue.value.mobile;
    this.hospitalModalObj.location = this.formValue.value.location;
    this.hospitalModalObj.address = this.formValue.value.address;
    this.hospitalModalObj.bedAvailable = this.formValue.value.bedsAvailable;
    this.hospitalModalObj.ventilation = this.formValue.value.ventilation;
    this.hospitalModalObj.icus = this.formValue.value.icus;
    this.hospitalModalObj.isolationWard = this.formValue.value.isolationWard;

    this.api
      .updateHospital(this.hospitalModalObj, this.hospitalModalObj.id)
      .subscribe((res) => {
        alert('Updated SuccessFully');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllHospital();
      });
  } 
}
