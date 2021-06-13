import { Component, OnInit } from '@angular/core';
import { ConnectBeService } from 'src/app/connect-be.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
  headers=["First Name","Last Name","Gender","Age","Email Id","Contact No","Address","Password"];
  constructor(public _connectbe:ConnectBeService,public router: Router) { }

  ngOnInit(): void {
  }

}
