import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AdminlistComponent } from './Components/adminlist/adminlist.component';
import { BookingsStatusComponent } from './Components/bookings-status/bookings-status.component';
import { DepartmentsComponent } from './Components/departments/departments.component';
import { FacilitiesComponent } from './Components/facilities/facilities.component';
import { FooterComponent } from './Components/footer/footer.component';
import { GenerateHospitalComponent } from './Components/generate-hospital/generate-hospital.component';
import { HomeComponent } from './Components/home/home.component';
import { HospitalDisplayComponent } from './Components/hospital-display/hospital-display.component';
import { HospitalListComponent } from './Components/hospital-list/hospital-list.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'admin-list', component: AdminlistComponent },
  { path: 'about', component: AboutComponent },
  { path: 'booking-status', component: BookingsStatusComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'generate-hospital', component: GenerateHospitalComponent },
  { path: 'home', component: HomeComponent },
  { path: 'hospital-list', component: HospitalListComponent },
  { path: 'hospital-display', component: HospitalDisplayComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  AdminComponent,
  AdminlistComponent,
  AboutComponent,
  BookingsStatusComponent,
  DepartmentsComponent,
  HomeComponent,
  FacilitiesComponent,
  FooterComponent,
  GenerateHospitalComponent,
  HospitalListComponent,
  HospitalDisplayComponent,
  LoginComponent,
  NavbarComponent,
  RegisterComponent,
];
