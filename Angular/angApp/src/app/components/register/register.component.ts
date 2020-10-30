import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from "../../models/User";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;

  userForm = new FormGroup({
    userName: new FormControl(),
    userPass: new FormControl(),
    userEmail: new FormControl(),
    userRole: new FormControl()
  })

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.userForm.value);
    this.RegisterUser(this.userForm.get('userName').value, this.userForm.get('userPass').value,
      this.userForm.get('userEmail').value, this.userForm.get('userRole').value);
      console.log("User was submitted successfully");
    this.userForm.reset();
  }

  RegisterUser(userName, userPass, userEmail, userRole) {
    let myuser = new User();
    myuser.userName = userName;
    myuser.userPass = userPass;
    myuser.userEmail = userEmail;
    myuser.userRole = userRole;

    this.userService.registerUser(myuser).subscribe(user => {
      user = myuser;
    })
  }

}
