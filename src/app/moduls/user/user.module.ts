import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

import {UserRoutingModule} from './user-routing.module';
import {UserResolver, UserService} from "./services";
import {UsersComponent} from "./components/users/users.component";
import {UserComponent} from "./components/user/user.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {BackGuard} from "../../guards";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UserRoutingModule,
    RouterModule
  ],
  providers: [
    UserService,
    UserResolver,
    BackGuard
  ]
})
export class UserModule {
}
