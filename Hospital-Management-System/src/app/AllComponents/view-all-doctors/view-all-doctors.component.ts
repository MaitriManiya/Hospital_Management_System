import { Component, OnInit } from '@angular/core';
import { ConnectBeService } from 'src/app/connect-be.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-view-all-doctors',
  templateUrl: './view-all-doctors.component.html',
  styleUrls: ['./view-all-doctors.component.css']
})
export class ViewAllDoctorsComponent implements OnInit {
  doctors=[];
  headers=["First Name","Last Name","Email Id","Contacr Number","Gender","Address","Age","Specialist"];
  constructor(public _connectbe:ConnectBeService,public router: Router) { }

  ngOnInit(): void {
    this._connectbe.getAllDoctors()
    .subscribe
    (
      res=>this.doctors=res,
      err=>console.log(err)
    )
    //this.router.navigate(['/viewAllDoctors']);
  }
  OnEditDoctor(dId)
  {
   localStorage.setItem("dId",dId);
    this.router.navigate(['/editDoctor']);
  }

  OnDeleteDoctor(dId)
  {
  //  console.log(dId);
    this._connectbe.deleteDocotor(dId)
    .subscribe
    (
      res=>console.log(res),
      err=>console.log(err)
    )
  this.router.navigate(['/viewAllDoctors']);
  }
}
