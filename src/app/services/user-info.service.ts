import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor() { }
  storage = new BehaviorSubject<any>({});

}
