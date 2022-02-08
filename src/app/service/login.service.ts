import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  Valid = false;
  
  
  constructor() { }

  isValid() {
    return this.Valid;
  }

}


