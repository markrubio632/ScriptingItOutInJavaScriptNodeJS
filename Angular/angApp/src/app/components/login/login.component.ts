import { Component, OnInit } from '@angular/core';
import { User } from "../../models/User";
import { UserService } from "../../services/user.service";
import { FormControl, FormGroup } from '@angular/forms';
import { UserComponent } from "../user/user.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User[];
  myuser:User;
  data: any=[];

  userForm = new FormGroup({
    userName: new FormControl(),
    userPass: new FormControl()
  })

  constructor(private userService:UserService) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.userForm.value);
    this.Login(this.userForm.get('userName').value, this.userForm.get('userPass').value);
    window.location.reload();
 }

  SaveUserInStorage(key, val){
    sessionStorage.setItem(key, JSON.stringify(val));
  }

  GetUserInStorage(key){
    this.data[key] = sessionStorage.getItem(key);
  }

  Login(userName, userPass){
    this.userService.getAllUsers().subscribe(user =>{
      this.user = user;
      for(let i = 0; i < user.length; i++){
        //acts as the login mechanism
        if(this.user[i].userName === userName && this.user[i].userPass === userPass){
          this.SaveUserInStorage('user', this.user[i]);
          sessionStorage.setItem('isAdmin', this.user[i].userRole);
          sessionStorage.setItem('isLogged', 'true');
          //sessionStorage.setItem('logger', 'users');
        }
      }
    });
  }

}
