import { Observable } from "rxjs";
import { Token } from "../models/User/token";
import { UserGateway } from "../models/User/gateway/user-gateway";
import { User } from "../models/User/user";
import { UserResponse } from "../models/User/user-response";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})

export class Userusecase{
  constructor(private _userGateway:UserGateway){}
  login(email:String, password:String):Observable<Token>{


    //aca va todo lo relacionado con la logica de la app
    /*
    if (email.includes('gmail')){
      return throwError('El usuario no cuenta con un email valido')
    }
    */

    return this._userGateway.login(email, password)
  }

  signup(user:User):Observable<UserResponse>{
    // aca la logica
    return this._userGateway.signup(user);
  }
}
