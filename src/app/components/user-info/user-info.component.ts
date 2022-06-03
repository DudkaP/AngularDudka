import {Component, OnInit} from '@angular/core';
import {UserInfoService} from "../../services";
import {FormControl, FormGroup} from "@angular/forms";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user: IUser;
  form: FormGroup;

  constructor(private userInfoService: UserInfoService) {
    this.form = new FormGroup({
      name: new FormControl(''),
      age: new FormControl('')
    });
    this.userInfoService.storage.subscribe(value => this.user = value);
  }

  ngOnInit(): void {
  }

  saveToStorage() {
    this.userInfoService.storage.next(this.form.value);
  }

  del() {
    this.userInfoService.storage.next({})
  }
}
