import { Component, OnInit } from '@angular/core';
import { ConnectBeService } from 'src/app/connect-be.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData={
    email:'',
    password:''
  }
  constructor(private _connectbe:ConnectBeService,private router: Router) { }

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
      this.router.navigate(['/adminPages']);
    }
}
