import { Component, OnInit } from '@angular/core';
import {UserInfoService} from "../../services";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private userInfoService:UserInfoService) { }

  ngOnInit(): void {
  }

  saveToStorage(){
    this.userInfoService.storage.next('test');
  }
}
