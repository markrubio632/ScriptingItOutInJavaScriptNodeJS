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
    window.location.reload();
  }

}
