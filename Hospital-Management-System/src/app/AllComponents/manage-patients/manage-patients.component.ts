import { Component, OnInit } from '@angular/core';
import { ConnectBeService } from 'src/app/connect-be.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-manage-patients',
  templateUrl: './manage-patients.component.html',
  styleUrls: ['./manage-patients.component.css']
})
export class ManagePatientsComponent implements OnInit {

  constructor(public _connectbe:ConnectBeService,public router: Router) { }

  ngOnInit(): void {
  }

}
