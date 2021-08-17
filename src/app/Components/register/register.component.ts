import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminModel } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AdminService],
})
export class RegisterComponent implements OnInit { 
  @Input() item ='';
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
  postAdminDetails() {
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
}
