import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {CarsComponent} from "./components/cars/cars.component";
import {CarFormComponent} from "./components/car-form/car-form.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {MovieComponent} from "./components/movie/movie.component";

const routes:Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: 'movie', component: MovieComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'carForm', component: CarFormComponent, children:[
          {path:'cars', component:CarsComponent}
        ]},
      {path: 'logout', component: LogoutComponent}
    ]
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
