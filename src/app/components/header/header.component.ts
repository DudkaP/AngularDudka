import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../services";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user:IUser;

  constructor(private userInfoService:StorageService) {

    this.userInfoService.storage.subscribe(value => this.user = value);

  }

  ngOnInit(): void {
  }

  logOut() {
    this.userInfoService.storage.next({});
  }
}
