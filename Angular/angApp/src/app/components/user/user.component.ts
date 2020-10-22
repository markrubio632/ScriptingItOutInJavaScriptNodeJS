import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  userForm = new FormGroup({
      userName: new FormControl(''),
      userPass: new FormControl(''),
      userEmail: new FormControl(''),
      userRole: new FormControl('')
    })
  constructor(private userService:UserService, private formBuilder:FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.FindUsers();
  }
  
  FindUsers(){
    this.userService.getUsers().subscribe(user =>{
      this.user = user;
      
    });
  }

  onSubmit(){
     console.warn(this.userForm.value);
     this.RegisterUser(this.userForm.get('userName'), this.userForm.get('userPass'), this.userForm.get('userEmail'), this.userForm.get('userRole'));
     this.userForm.reset();
  }
  

  RegisterUser(userName, userPass, userEmail, userRole){
    this.userService.registerUser(userName, userPass, userEmail, userRole).subscribe(user=>{
      //this.user.userId = user.userId;
      this.user.userName = user.userName;
      this.user.userPass = user.userPass;
      this.user.userEmail = user.userEmail;
      this.user.userRole = user.userRole;
    })
  }
  

}
