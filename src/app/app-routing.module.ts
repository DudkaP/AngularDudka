import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {MovieComponent} from "./components/movie/movie.component";
import {IndexComponent} from "./components/index/index.component";

const routes:Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', component: IndexComponent},
      {path: 'movie', component: MovieComponent}
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
