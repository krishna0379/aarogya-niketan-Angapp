import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { AdminComponent } from './Components/admin/admin.component';
import { BookingsStatusComponent } from './Components/bookings-status/bookings-status.component';
import { DepartmentsComponent } from './Components/departments/departments.component';
import { FacilitiesComponent } from './Components/facilities/facilities.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { HospitalInformationComponent } from './Components/hospital-information/hospital-information.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'booking-status', component: BookingsStatusComponent },
  { path: 'hospital-information', component: HospitalInformationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  AdminComponent,
  AboutComponent,
  DepartmentsComponent,
  HomeComponent,
  BookingsStatusComponent,
  FacilitiesComponent,
  FooterComponent,
  HospitalInformationComponent,
  LoginComponent,
  RegisterComponent,
  NavbarComponent,
];
