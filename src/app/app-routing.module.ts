import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";

const routes:Routes = [
  {
    path: '', component: HomeComponent, children:[
      {path:'users.page', loadChildren:()=>import('./moduls').then(value => value.UserModule)},
      {path:'posts.page', loadChildren:()=>import('./moduls').then(value => value.PostModule)}
    ]
  }
  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
