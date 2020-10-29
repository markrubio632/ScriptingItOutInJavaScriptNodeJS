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

  constructor() { }

  ngOnInit(): void {
    console.log(this.isLogged);
    if(this.isLogged != null){
      this.GetUserInStorage('user');
      console.log("user is: " + JSON.stringify(this.user));
    }
    else{
      console.log("this aint it");
    }
  }

  GetUserInStorage(key){

    /* console.log(sessionStorage.getItem(key))
    this.user = JSON.parse(sessionStorage.getItem(key));
    console.log("session user:" + this.user); */

    console.log(localStorage.getItem(key));
    this.user = localStorage.getItem(key);
    console.log("local user:" + JSON.stringify(this.user));
  }

}
