import { Component, OnInit } from '@angular/core';
import { ConnectBeService } from 'src/app/connect-be.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {

  doctor={
   
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
    if(localStorage.getItem("dId")=="undefined")
    {
      console.log("Id is not passed");
    }
    else
    {
     // console.log(localStorage.getItem("dId"));
      this._connectbe.getDoctorById(localStorage.getItem("dId"))
      .subscribe
      (
       
        res=>this.doctor=res[0],
        //res=>console.log(res),
        err=>console.log(err)
      )
      console.log(this.doctor);
      //console.log(this.doctor.email);
    }
  }

  OnUpdateDoctor(dId)
    {
      //console.log(dId);
      this._connectbe.updateDoctor(this.doctor)
      .subscribe
      (
       
        res=>this.doctor=res[0],
        //res=>console.log(res),
        err=>console.log(err)
      )
      console.log(this.doctor);
      this.router.navigate(['/viewAllDoctors']);
    }

    
}
