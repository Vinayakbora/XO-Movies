import { Injectable } from '@angular/core';
import { Register } from '../model/register';

@Injectable({
  providedIn: 'root'
})
export class RegistrationserviceService {

  registrationDetails: Register[] = [];

  constructor() {}

  setData(x: Register) {
    this.registrationDetails.push(x);
    console.log(this.registrationDetails);
  }

  isVerify(email: string, pwd: string): boolean {
    for (let i = 0; i < this.registrationDetails.length; i++) {
      if (
        email == this.registrationDetails[i].email &&
        pwd == this.registrationDetails[i].pwd
      ) {
        return true;
      }
    }
    return false;
  }
   
}
