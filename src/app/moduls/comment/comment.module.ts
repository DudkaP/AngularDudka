import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommentRoutingModule} from './comment-routing.module';
import {CommentService} from "./services";
import {HttpClientModule} from "@angular/common/http";
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentComponent} from "./components/comment/comment.component";
import {RouterModule} from "@angular/router";


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
    CommentService
  ]
})
export class CommentModule {
}
