import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {PostRoutingModule} from './post-routing.module';
import {PostService} from "./services";
import {PostComponent} from "./components/post/post.component";
import {PostsComponent} from "./components/posts/posts.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {PostCommentComponent} from "./comment/components/comment/comment.component";
import {PostCommentsComponent} from "./comment/components/comments/comments.component";
import {BackGuard, StartGuard} from "../../guards";


@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    PostDetailsComponent,
    PostCommentComponent,
    PostCommentsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PostRoutingModule
  ],
  providers: [
    PostService,
    BackGuard,
    StartGuard
  ]
})
export class PostModule {
}
