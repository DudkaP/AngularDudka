import {Component, Input, OnInit} from '@angular/core';

import {UserModels} from "../../models/user.models";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: UserModels;

  constructor() {
  }

  ngOnInit(): void {
  }

}
