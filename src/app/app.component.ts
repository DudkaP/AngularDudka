import { Component } from '@angular/core';
import {IUser} from "./interfaces";
import {DataService} from "./services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:IUser;

  constructor(private dataService:DataService) {
    dataService.storage.subscribe(value => this.user = value)
  }
}
