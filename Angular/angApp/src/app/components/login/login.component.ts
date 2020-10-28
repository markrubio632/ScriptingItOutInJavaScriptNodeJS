import { Component, Inject, OnInit } from '@angular/core';
import { User } from "../../models/User";
import { UserService } from "../../services/user.service";
import { FormControl, FormGroup } from '@angular/forms';


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

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.userForm.value);
    this.Login(this.userForm.get('userName').value, this.userForm.get('userPass').value); //session storage is in Login()
    this.userForm.reset();
 }

  SaveUserInStorage(key, val){
    //console.log('receieved= key: ' + key + ' value: ' + JSON.stringify(val));
    sessionStorage.setItem(key, val);
    this.data[key] = sessionStorage.getItem(key);
  }

  GetUserInStorage(key){
    console.log('received= key: ' + key);
    this.data[key] = sessionStorage.getItem(key);
    console.log(JSON.stringify(this.data));
  }

  Login(userName, userPass){
    this.userService.getAllUsers().subscribe(user =>{
      this.user = user;
      for(let i = 0; i < user.length; i++){
        if(this.user[i].userName === userName && this.user[i].userPass === userPass){
          //this.myuser = this.user[i]; - should be the same 
          console.log('in login, this user is: ' + JSON.stringify(this.user[i]));
          this.SaveUserInStorage('user', this.user[i]);
        }
      }
    });
  }

}
