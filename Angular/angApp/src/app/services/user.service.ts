import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from "../models/User";
import { Observable } from 'rxjs';
import {  } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl:string = 'http://localhost:8081';
  userGetRequest:string = "/get";
  userPostRequest:string = "/post";
  userPutRequest:string = "/put";
  userDeleteRequest:string = "/delete";

  constructor(private http:HttpClient) { }

  getUsers():Observable<User>{
    return this.http.get<User>(`${this.userUrl}${this.userGetRequest}`, httpOptions);
  }

  registerUser(userName, userPass, userEmail, userRole):Observable<User>{
    return this.http.post<User>(`${this.userUrl}${this.userPostRequest}`,
    [userName, userPass, userEmail, userRole], httpOptions);
  }

}
