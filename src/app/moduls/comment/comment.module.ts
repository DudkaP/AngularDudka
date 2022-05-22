import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

import {CommentRoutingModule} from './comment-routing.module';
import {CommentService} from "./services";
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentComponent} from "./components/comment/comment.component";
import {BackGuard} from "../../guards";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CommentRoutingModule,
    RouterModule
  ],
  providers: [
    CommentService,
    BackGuard
  ]
})
export class CommentModule {
}
