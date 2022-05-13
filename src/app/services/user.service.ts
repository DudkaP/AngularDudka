import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {UserModels} from "../models/user.models";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private outUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<UserModels[]> {
    return this.http
      .get<UserModels[]>(this.outUrl)
  }

}
