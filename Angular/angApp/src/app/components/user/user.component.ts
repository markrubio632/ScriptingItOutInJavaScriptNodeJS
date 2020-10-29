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
  role:string;
  show:boolean;

  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor(private userService:UserService, ) { 
    
  }

  ngOnInit(): void {
    this.FindUsers();
    if(sessionStorage.getItem('user') == null){
      console.log('User needs to login');
    }
    else {
      this.GetUserInStorage('user');
    }
  }

  onToggle(){
    this.show = !this.show;
    if(this.show){
      this.open.emit(null);
    }
    else{
      this.close.emit(null);
    }
  }

  GetUserInStorage(key){
    //console.log('received= key: ' + key);
    this.data[key] = sessionStorage.getItem(key);
    //console.log(this.data);
  }
  
  FindUsers(){
    this.userService.getAllUsers().subscribe(user =>{
      this.user = user;
    });
  }
  
  DeleteUser(userId){
    
    this.userService.deleteUser(userId).subscribe(dUser=>{
      //this.dUser.userId = userId;
      this.dUser = dUser;
    });
    this.FindUsers();
  }

}
