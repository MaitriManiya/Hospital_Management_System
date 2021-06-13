import { Component, OnInit } from '@angular/core';
import { ConnectBeService } from 'src/app/connect-be.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-patient-pages',
  templateUrl: './patient-pages.component.html',
  styleUrls: ['./patient-pages.component.css']
})
export class PatientPagesComponent implements OnInit {

  constructor(public _connectbe:ConnectBeService,public router: Router) { }

  ngOnInit(): void {
  }

}
