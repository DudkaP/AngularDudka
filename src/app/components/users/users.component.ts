import {Component, OnInit} from '@angular/core';

import {UserService} from "../../services/user.service";
import {UserModels} from "../../models/user.models";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserModels[];

  constructor(private userService: UserService) {
  }


  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);
  }

}
