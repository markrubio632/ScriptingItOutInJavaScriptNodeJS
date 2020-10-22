import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(user =>{
      this.user = user;
    });
  }
  /* FindUser(){
    this.userService.getUsers().subscribe(user =>{
      this.user = user;
    });
  } */

}
