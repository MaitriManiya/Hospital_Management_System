import { Component, OnInit } from '@angular/core';
import { ConnectBeService } from 'src/app/connect-be.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  addDoctorData={
   
    name:{
      firstName:'',
      lastName:''
    },
    email:'',
    contactNo:'',
    gender:'',
    address:'',
    age:'',
    specialist:'',
    dId:''
  };
  constructor(public _connectbe:ConnectBeService,public router: Router) { }

  ngOnInit(): void {
  }
  addDoctor()
  {
    this._connectbe.addDoctor(this.addDoctorData)
    .subscribe
    (
      res=>console.log(res),
      err=>console.log(err)
    )
    this.router.navigate(['/viewAllDoctors']);
  }
  
}
