import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {HomeComponent} from "./home/home.component";
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: []
  ,
  bootstrap: [AppComponent]
})
export class AppModule {
}
