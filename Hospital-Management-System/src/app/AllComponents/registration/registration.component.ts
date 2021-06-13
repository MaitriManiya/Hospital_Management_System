import { Component, OnInit } from '@angular/core';
import { ConnectBeService } from 'src/app/connect-be.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerUserData={
    name:{
      firstName:'',
      lastName:''
    },
    gender:'',
    age:'',
    email:'',
    contactNo:'',
    address:'',
    password:'',
    role:"patient"
    
  }
  constructor(public _connectbe:ConnectBeService,public router: Router) { }

  ngOnInit(): void {
  }
  registerUser()
  {
    this._connectbe.registerUser(this.registerUserData)
    .subscribe(
      res=>{
        console.log(res)
        localStorage.setItem('token',res.token);
        
      },
      err=>console.log(err)
    )
    this.router.navigate(['/patientPages']);
  }
}
