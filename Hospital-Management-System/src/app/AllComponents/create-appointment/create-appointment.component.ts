import { Component, OnInit } from '@angular/core';
import { ConnectBeService } from 'src/app/connect-be.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  appointmentData={
   
    name:{
      firstName:'',
      lastName:''
    },
    DateOfApp:'',
    Specialist:'',
   
  };
  constructor(public _connectbe:ConnectBeService,public router: Router) { }

  ngOnInit(): void {
  }

  OnCreateApp()
  {
    this._connectbe.createApp(this.appointmentData)
    .subscribe
    (
      res=>console.log(res),
      err=>console.log(err)
    )
    this.router.navigate(['/patientPages']);
  }
  
}
