import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  storage = new BehaviorSubject<any>({});

  constructor() { }

}
