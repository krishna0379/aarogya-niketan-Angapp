import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AdminModel } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AdminService],
})
export class RegisterComponent implements OnInit {
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

   /*  this.formValue = new FormGroup({
      name: new FormControl(null, Validators.required),

      email: new FormControl(null, [Validators.required, Validators.email]),

      mobile: new FormControl(
        null,

        [
          Validators.required,

          Validators.pattern(
            '^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$'
          ),
        ]
      ),

      userName: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),

      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    }); */
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
  /* getname() {
    return this.formValue.get('name');
  }

  getemail() {
    return this.formValue.get('email');
  }

  getmobile() {
    return this.formValue.get('mobile');
  }

  getuserName() {
    return this.formValue.get('userName');
  }

  getpassword() {
    return this.formValue.get('password');
  } */
}
