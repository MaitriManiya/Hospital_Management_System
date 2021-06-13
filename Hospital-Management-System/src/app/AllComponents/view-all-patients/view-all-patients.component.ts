import { Component, OnInit } from '@angular/core';
import { ConnectBeService } from 'src/app/connect-be.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-view-all-patients',
  templateUrl: './view-all-patients.component.html',
  styleUrls: ['./view-all-patients.component.css']
})
export class ViewAllPatientsComponent implements OnInit {

  patients=[]
  headers=["First Name","Last Name","Gender","Age","Email","Contact No"]
  constructor(public _connectbe:ConnectBeService,public router: Router) { }

  ngOnInit(): void {
    this._connectbe.getAllPatients()
    .subscribe
    (
      res=>this.patients=res,
      err=>console.log(err)
    )
    console.log(this.patients);
  }

}
