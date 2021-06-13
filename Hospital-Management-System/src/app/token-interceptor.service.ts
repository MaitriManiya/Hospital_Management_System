import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import { ConnectBeService } from 'src/app/connect-be.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor{

  constructor(private injector:Injector) { }

  intercept(req,next){
    let connectDbService=this.injector.get(ConnectBeService)
    let tokenizedReq=req.clone({
      setHeaders:{
        Authorization:`Bearer ${connectDbService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
