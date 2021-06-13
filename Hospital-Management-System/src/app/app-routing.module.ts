import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPagesComponent } from './AllComponents/admin-pages/admin-pages.component';
import { IndexComponent } from './AllComponents/index/index.component';
import { DoctorPagesComponent } from './AllComponents/doctor-pages/doctor-pages.component';

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
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { LoginPatientPageComponent } from './AllComponents/login-patient-page/login-patient-page.component';
import { AuthGuard } from './auth.guard';
import { ViewAllAppointmentComponent } from './AllComponents/view-all-appointment/view-all-appointment.component';



const routes:Routes=[
  {path:'',component:IndexComponent},
  {path:'adminPages',component:AdminPagesComponent},
  {path:'index',component:IndexComponent},
  {path:'doctorPages',component:DoctorPagesComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'managePatients',component:ManagePatientsComponent},
  {path:'manageDoctors',component:ManageDoctorsComponent},
  {path:'adminProfile',component:AdminProfileComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'createCase',component:CreateCaseComponent},
  {path:'admitPatient',component:AdmitPatientComponent},
  {path:'dischargePatient',component:DischargePatientComponent},
  {path:'generateBill',component:GenerateBillComponent},
  {path:'generateCertificate',component:GenerateCertificateComponent},
  {path:'viewAllPatients',component:ViewAllPatientsComponent},
  {path:'addDoctor',component:AddDoctorComponent},
  {path:'addPatient',component:AddPatientComponent},
  {path:'profile',component:ProfileComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'viewAllDoctors',component:ViewAllDoctorsComponent},
  {path:'viewAssignedPatients',component:ViewAssignedPatientsComponent},
  {path:'patientPages',component:PatientPagesComponent},
  {path:'createAppointment',component:CreateAppointmentComponent,canActivate:[AuthGuard]},
  {path:'editDoctor',component:EditDoctorComponent},
  {path:'loginPatient',component:LoginPatientPageComponent},
  {path:'ViewAllAppointment',component:ViewAllAppointmentComponent}
 
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
