import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {UserDetailsModel, UserModels} from "../../models";
import {urls} from "../../../../constants";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<UserModels[]> {
    return this.http
      .get<UserModels[]>(urls.users)
  }

  getUserById(id: string): Observable<UserDetailsModel> {
    return this.http
      .get<UserDetailsModel>(urls.users + '/' + id)
  }

}
