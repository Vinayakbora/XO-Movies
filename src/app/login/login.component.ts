import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationserviceService } from '../service/registrationservice.service';
import { LoginService } from '../service/login.service';
import {AppComponent} from '../app.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string="";
  pwd:string=""; 

  isLoginFailed=false;

  constructor(private verifySer:RegistrationserviceService,private router:Router,private logtoHome : LoginService, private checkLogin : AppComponent ) {}

  verify()
  {
      if(!(this.verifySer.isVerify(this.email,this.pwd)))
      {
        this.isLoginFailed=true
      }
      else
      {
        this.logtoHome.Valid =true
        this.checkLogin.LoginStatus = true;
        this.router.navigate(['/home']); 
      }
  }

  ngOnInit(): void {
  }

}

