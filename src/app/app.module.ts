import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './Components/admin/admin.component';
import { AdminlistComponent } from './Components/adminlist/adminlist.component';
import { AboutComponent } from './Components/about/about.component';
import { DepartmentsComponent } from './Components/departments/departments.component';
import { HomeComponent } from './Components/home/home.component';
import { BookingsStatusComponent } from './Components/bookings-status/bookings-status.component';
import { FacilitiesComponent } from './Components/facilities/facilities.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HospitalInformationComponent } from './Components/hospital-information/hospital-information.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminlistComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
