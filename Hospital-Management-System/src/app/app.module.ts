import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IndexComponent } from './AllComponents/index/index.component';
import { AdminPagesComponent } from './AllComponents/admin-pages/admin-pages.component';
import { AppRoutingModule } from './app-routing.module';
import { DoctorPagesComponent } from './AllComponents/doctor-pages/doctor-pages.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { ContactUsComponent } from './AllComponents/contact-us/contact-us.component';
import { AboutUsComponent } from './AllComponents/about-us/about-us.component';
import { ManagePatientsComponent } from './AllComponents/manage-patients/manage-patients.component';
import { ManageDoctorsComponent } from './AllComponents/manage-doctors/manage-doctors.component';

import { LoginComponent } from './AllComponents/login/login.component';
import { LogoutComponent } from './AllComponents/logout/logout.component';
import { CreateCaseComponent } from './AllComponents/create-case/create-case.component';
import { AdmitPatientComponent } from './AllComponents/admit-patient/admit-patient.component';
import { DischargePatientComponent } from './AllComponents/discharge-patient/discharge-patient.component';
import { GenerateBillComponent } from './AllComponents/generate-bill/generate-bill.component';
import { GenerateCertificateComponent } from './AllComponents/generate-certificate/generate-certificate.component';
import { ViewAllPatientsComponent } from './AllComponents/view-all-patients/view-all-patients.component';
import { AddDoctorComponent } from './AllComponents/add-doctor/add-doctor.component';
import { AddPatientComponent } from './AllComponents/add-patient/add-patient.component';
import { ProfileComponent } from './AllComponents/profile/profile.component';
import { RegistrationComponent } from './AllComponents/registration/registration.component';
import { ViewAllDoctorsComponent } from './AllComponents/view-all-doctors/view-all-doctors.component';
import { ViewAssignedPatientsComponent } from './AllComponents/view-assigned-patients/view-assigned-patients.component';
import { AdminProfileComponent } from './AllComponents/admin-profile/admin-profile.component';
import { PatientPagesComponent } from './AllComponents/patient-pages/patient-pages.component';
import { CreateAppointmentComponent } from './AllComponents/create-appointment/create-appointment.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { ConnectBeService } from './connect-be.service';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { LoginPatientPageComponent } from './AllComponents/login-patient-page/login-patient-page.component';
import { AuthGuard } from './auth.guard';
import {TokenInterceptorService} from './token-interceptor.service';
import { ViewAllAppointmentComponent } from './AllComponents/view-all-appointment/view-all-appointment.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AdminPagesComponent,
    DoctorPagesComponent,
    EditDoctorComponent,
    ContactUsComponent,
    AboutUsComponent,
    ManagePatientsComponent,
    ManageDoctorsComponent,
   
    LoginComponent,
    LogoutComponent,
    CreateCaseComponent,
    AdmitPatientComponent,
    DischargePatientComponent,
    GenerateBillComponent,
    GenerateCertificateComponent,
    ViewAllPatientsComponent,
    AddDoctorComponent,
    AddPatientComponent,
    ProfileComponent,
    RegistrationComponent,
    ViewAllDoctorsComponent,
    ViewAssignedPatientsComponent,
    AdminProfileComponent,
    PatientPagesComponent,
    CreateAppointmentComponent,
    EditDoctorComponent,
    LoginPatientPageComponent,
    ViewAllAppointmentComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule
  ],
  providers: [ConnectBeService,AuthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
