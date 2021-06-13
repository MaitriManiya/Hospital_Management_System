import { Component, OnInit } from '@angular/core';
import { ConnectBeService } from 'src/app/connect-be.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login-patient-page',
  templateUrl: './login-patient-page.component.html',
  styleUrls: ['./login-patient-page.component.css']
})
export class LoginPatientPageComponent implements OnInit {
  loginUserData={
    email:'',
    password:''
  }
  constructor(public _connectbe:ConnectBeService,public router: Router) { }

  ngOnInit(): void {
  }
  loginUser()
    {
      this._connectbe.loginUser(this.loginUserData)
      .subscribe(
        res=>{
          console.log(res)
          localStorage.setItem('token',res.token)
        },
        err=>console.log(err)
      )
      this.router.navigate(['/patientPages']);
    }
}
