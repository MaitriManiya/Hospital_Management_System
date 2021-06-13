import { Component, OnInit } from '@angular/core';
import { ConnectBeService } from 'src/app/connect-be.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-view-all-appointment',
  templateUrl: './view-all-appointment.component.html',
  styleUrls: ['./view-all-appointment.component.css']
})
export class ViewAllAppointmentComponent implements OnInit {

  Appointments=[]
  headers=["First Name","Last Name","Date of an Appointment","Specialist"]
  constructor(public _connectbe:ConnectBeService,public router: Router) { }

  ngOnInit(): void {
    this._connectbe.getAllApp()
    .subscribe
    (
      res=>this.Appointments=res,
      err=>console.log(err)
    )
    console.log(this.Appointments);
    //this.router.navigate(['/viewAllDoctors']);
  }
  }


