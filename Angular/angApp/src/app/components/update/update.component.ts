import { Component, OnInit } from '@angular/core';
import { User } from "../../models/User";
import { UserService } from "../../services/user.service";
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  user:User;

  constructor(private userService:UserService) { }

  userForm = new FormGroup({
    userName: new FormControl(),
    userPass: new FormControl(),
    userEmail: new FormControl()
  })

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.userForm.value);
    this.Update(this.userForm.get('userName').value, this.userForm.get('userPass').value, 
    this.userForm.get('userEmail').value, this.userForm.get('userRole').value);
    this.userForm.reset();
  }

  Update(userName, userPass, userEmail, userRole){

    let myuser = new User();
    myuser.userName = userName;
    myuser.userPass = userPass;
    myuser.userEmail = userEmail;
    myuser.userRole = userRole;

    this.userService.updateUser(myuser).subscribe(user=>{
      user = myuser;
    })
  }

}
