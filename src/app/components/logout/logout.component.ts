import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router, private authService:AuthService) {
    this.logOut()
  }

  ngOnInit(): void {
  }
  logOut():void {
    this.authService.deleteToken();
    this.router.navigate(['']);
  }
}
