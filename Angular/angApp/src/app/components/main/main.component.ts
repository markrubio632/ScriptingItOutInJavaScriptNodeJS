import { Component, OnInit } from '@angular/core';
import { User } from "../../models/User";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user:User;
  
  isLogged:string = sessionStorage.getItem('isLogged');
  loginCondition:boolean = (this.isLogged === null && sessionStorage.getItem('logger') === 'Login');
  registerCondition:boolean = (sessionStorage.getItem('logger') === 'Register');

  constructor() { 
    sessionStorage.setItem('logger', 'Login');
  }

  ngOnInit(): void {
    console.log("logged? " + this.isLogged);
    
    if(this.isLogged != null){
      this.user = JSON.parse(sessionStorage.getItem('user'));
      console.log(this.user);
    }
  }

}
