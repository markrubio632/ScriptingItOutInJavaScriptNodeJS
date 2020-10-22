import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from "../models/User";
import { Observable } from 'rxjs';

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
    return this.http.get<User>(`${this.userUrl}${this.userGetRequest}`);
  }

  /* registerUser():Observable<User>{
    return this.http.post<User>(`${this.userUrl}${this.userPostRequest}`, );
  } */

}
