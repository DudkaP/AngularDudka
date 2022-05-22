import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from "./components/posts/posts.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {PostCommentsComponent} from "./comment/components/comments/comments.component";
import {BackGuard, StartGuard} from "../../guards";

const routes: Routes = [
  {
    path: '', component: PostsComponent, canDeactivate: [BackGuard], children: [
      {
        path: 'post.details.page/:id', component: PostDetailsComponent, children: [
          {path: 'comments.page/:id', canActivate: [StartGuard], component: PostCommentsComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
