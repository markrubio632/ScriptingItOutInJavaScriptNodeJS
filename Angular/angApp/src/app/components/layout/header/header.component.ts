import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged:string = sessionStorage.getItem('isLogged');

  constructor() { }

  ngOnInit(): void {
  }

  Logout(){
      sessionStorage.clear();
      localStorage.clear();
      this.Login();
  }

  Login(){ //this wil be a login button
    sessionStorage.setItem('logger', 'Login');
    window.location.reload();
  }

  Register(){
    sessionStorage.setItem('logger', 'Register');
    window.location.reload();
  }

  User(){
    sessionStorage.setItem('logger', 'User');
    window.location.reload();
  }
  
  Home(){
    sessionStorage.setItem('logger', 'Home');
    window.location.reload();
  }

}
