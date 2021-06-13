import { Component, OnInit } from '@angular/core';
import { ConnectBeService } from 'src/app/connect-be.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-pages',
  templateUrl: './admin-pages.component.html',
  styleUrls: ['./admin-pages.component.css']
})
export class AdminPagesComponent implements OnInit {

  constructor(public _connectbe:ConnectBeService,public router: Router) { }

  ngOnInit(): void {
  }

}
