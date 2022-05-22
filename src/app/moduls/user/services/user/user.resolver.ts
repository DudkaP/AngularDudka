import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserDetailsModel} from "../../models";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<UserDetailsModel> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserDetailsModel> | Promise<UserDetailsModel> | UserDetailsModel {
    const {id} = route.params;
    return this.userService.getUserById(id);
  }
}
