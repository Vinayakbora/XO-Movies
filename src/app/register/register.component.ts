import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../model/register';
import { RegistrationserviceService } from '../service/registrationservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService:RegistrationserviceService,private router:Router) { }
  ngOnInit(): void {
  }
  registerDetails:Register[]=[];
  tempResDetails:Register = {id : 0,name:"",email:"", pwd:""};
  
  addTo(){
    this.registerDetails.push(this.tempResDetails);
    this.registerService.setData(this.tempResDetails);
    this.router.navigate(['/login']);
    this.tempResDetails=new Register();
    console.log(this.registerDetails);
  }

}
