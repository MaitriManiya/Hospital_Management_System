import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class ConnectBeService {

  private _addDoctorUrl="http://localhost:3000/api/addDoctor";
  private _viewAllDoctors="http://localhost:3000/api/viewAllDoctors";
  private _getDoctorById="http://localhost:3000/api/getDoctorById";
  private _updateDoctor="http://localhost:3000/api/updateDoctor";
  private _deleteDoctor="http://localhost:3000/api/deleteDoctor";
  private _registerUser="http://localhost:3000/api/register";
  private _loginUser="http://localhost:3000/api/login";
  private _createApp="http://localhost:3000/api/createApp";
  private _getAllApp="http://localhost:3000/api/getAllApp";
  private _getAllPatients="http://localhost:3000/api/getAllPatients";
  constructor(private http:HttpClient,private router: Router) { }
  addDoctor(doctor){
    return this.http.post<any>(this._addDoctorUrl,doctor)
  }

  getAllDoctors()
  {
    return this.http.get<any>(this._viewAllDoctors)
  }
  
  getDoctorById(dId)
  {
    return this.http.get<any>(this._getDoctorById+'/'+dId)
  }
  updateDoctor(doctor)
  {
    return this.http.post<any>(this._updateDoctor,doctor)
  }
  deleteDocotor(dId)
  {
    //console.log(dId +"from service");
    return this.http.delete<any>(this._deleteDoctor+'/'+dId)
  }

  registerUser(user)
  {
    return this.http.post<any>(this._registerUser,user)
  }
  loginUser(user)
  {
    return this.http.post<any>(this._loginUser,user)
  }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }

  getToken()
  {
    return localStorage.getItem('token')
  }

  logoutUser()
  {
    localStorage.removeItem('token')
    this.router.navigate(['/index'])
  }
  createApp(appointment){
    return this.http.post<any>(this._createApp,appointment)
  }

  getAllApp()
  {
    return this.http.get<any>(this._getAllApp)
  }
  getAllPatients()
  {
    return this.http.get<any>(this._getAllPatients)
  }

}
