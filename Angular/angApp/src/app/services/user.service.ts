import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from "../models/User";
import { Observable } from 'rxjs';

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

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.userUrl}${this.userGetRequest}`, httpOptions);
  }

  registerUser(user):Observable<User>{
    return this.http.post<User>(`${this.userUrl}${this.userPostRequest}`,
    JSON.stringify(user), httpOptions);
  }

  deleteUser(userId):Observable<any>{

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        userId: userId
      }
    }

    return this.http.delete<any>(`${this.userUrl}${this.userDeleteRequest}`, options);
  }

  updateUser(user):Observable<User>{
    return this.http.put<User>(`${this.userUrl}${this.userPutRequest}`, user, httpOptions);
  }

}
