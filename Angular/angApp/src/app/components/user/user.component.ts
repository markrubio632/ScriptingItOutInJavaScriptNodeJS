import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User[];
  dUser:User;
  data: any=[];
  userShow:boolean; //used in toggle for show users button
  regiShow:boolean; //used in toggle for add new user button
  updaShow:boolean; //used in troggle for update user button

  isAdmin = (sessionStorage.getItem('isAdmin') === 'Admin');

  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor(private userService:UserService ) { 
    
  }

  ngOnInit(): void {
    this.FindUsers();
    if(sessionStorage.getItem('user') == null){
      console.log('User needs to login');
    }
    else {
      this.GetUserInStorage('user');
      this.FindSoloUser();
    }
  }

  OnToggleShowUsers(){
    this.userShow = !this.userShow;
    if(this.userShow){
      this.open.emit(null);
    }
    else{
      this.close.emit(null);
    }
  }

  OnToggleAddUsers(){
    this.regiShow = !this.regiShow;
    if(this.regiShow){
      this.open.emit(null);
    }
    else{
      this.close.emit(null);
    }
  }

  OnToggleUpdateUsers(){
    this.updaShow = !this.updaShow;
    if(this.updaShow){
      this.open.emit(null);
    }
    else{
      this.close.emit(null);
    }
  }

  GetUserInStorage(key){
    this.data[key] = sessionStorage.getItem(key);
  }
  
  FindUsers(){
    this.userService.getAllUsers().subscribe(user =>{
      this.user = user;
    });
  }

  FindSoloUser(){
    this.dUser = JSON.parse(sessionStorage.getItem('user'));
  }

  UpdateUserRedirect(){
    sessionStorage.setItem('logger', 'Update');
    window.location.reload();
  }

  AddUserRedirect(){
    sessionStorage.setItem('logger', 'Register');
    window.location.reload();
  }
  
  DeleteUser(userId){
    this.userService.deleteUser(userId).subscribe(dUser=>{
      this.dUser = dUser;
    });
    this.FindUsers();
  }

}
