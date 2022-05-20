import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostDetailsComponent} from "../post/components/post-details/post-details.component";
import {CommentsComponent} from "./components/comments/comments.component";

const routes: Routes = [
  {path: 'comments.page', component: CommentsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
