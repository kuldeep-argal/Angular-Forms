import { Injectable } from '@angular/core';
import { LoginModel } from '../model/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  login(login:LoginModel){
    console.warn(login);
  }
}
