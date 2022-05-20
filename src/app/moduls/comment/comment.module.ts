import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import {CommentService} from "./services";
import {HttpClientModule} from "@angular/common/http";
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentComponent} from "./components/comment/comment.component";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CommentRoutingModule
  ],
  providers:[
    CommentService
  ]
})
export class CommentModule { }
