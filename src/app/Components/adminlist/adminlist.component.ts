import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminModel } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css'],
  providers: [AdminService],
})
export class AdminlistComponent implements OnInit {
  formValue!: FormGroup;
  adminModel: AdminModel = new AdminModel();
  adminData!: any;

  constructor(
    private formbuilder: FormBuilder,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name: [''],
      email: [''],
      userName: [''],
      password: [''],
      mobile: [''],
    });
    this.getAllAdmins();
  }
  postUserDetails() {
    this.adminModel.name = this.formValue.value.name;
    this.adminModel.email = this.formValue.value.email;
    this.adminModel.userName = this.formValue.value.userName;
    this.adminModel.password = this.formValue.value.password;
    this.adminModel.mobile = this.formValue.value.mobile;

    this.adminService.createAdmin(this.adminModel).subscribe(
      (res) => {
        console.log(res);
        alert('Employee Created');
        this.formValue.reset();
        this.getAllAdmins();
      },
      (err) => {
        alert('something Went Wrong');
      }
    );
  }

  getAllAdmins() {
    this.adminService.getAllAdmins().subscribe((res) => {
      this.adminData = res;
    });
  }

  getAdminById(row: any) {
    this.adminService.getAdminById(row.id).subscribe((res) => {
      alert(
        `{Id: ${row.id} \n Name: ${row.name} \n Email: ${row.email} \n Username: ${row.userName}}`
      );
    });
  }

  deleteAdmin(row: any) {
    this.adminService.deleteAdmin(row.id).subscribe((res) => {
      alert('User Deleted');
      this.getAllAdmins();
    });
  }

  onEdit(row: any) {
    this.adminModel.id = row.id;
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['userName'].setValue(row.userName);
    this.formValue.controls['password'].setValue(row.password);
    this.formValue.controls['mobile'].setValue(row.mobile);
  }

  updateAdminDetails() {
    this.adminModel.name = this.formValue.value.name;
    this.adminModel.email = this.formValue.value.email;
    this.adminModel.userName = this.formValue.value.userName;
    this.adminModel.password = this.formValue.value.password;
    this.adminModel.mobile = this.formValue.value.mobile;
    this.adminService
      .updateAdmin(this.adminModel, this.adminModel.id)
      .subscribe((res) => {
        alert('User Details Updated');

        this.formValue.reset();
        this.getAllAdmins();
      });
  }
  updateAdminDetails2(row: any) {
    this.adminModel.name = this.formValue.value.name;
    this.adminModel.email = this.formValue.value.email;
    this.adminModel.userName = this.formValue.value.userName;
    this.adminModel.password = this.formValue.value.password;
    this.adminModel.mobile = this.formValue.value.mobile;
    this.adminService.updateAdmin(this.adminData, row).subscribe((res) => {
      alert('User Details Updated');

      this.formValue.reset();
      this.getAllAdmins();
    });
  }
}
