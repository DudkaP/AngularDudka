import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../../services";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];
  @Output()
  userEmitt = new EventEmitter<IUser>();

  constructor(private userService:UserService) {

  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value => this.users = value);
  }

  catchUserEmitter(event:IUser):void {
    this.userEmitt.emit(event);
  }
}
