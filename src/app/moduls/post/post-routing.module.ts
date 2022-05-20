import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from "./components/posts/posts.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {PostCommentsComponent} from "./comment/components/comments/comments.component";

const routes: Routes = [
  {
    path: '', component: PostsComponent, children: [
      {
        path: 'post.details.page/:id', component: PostDetailsComponent, children: [
          {path:'comments.page/:id', component:PostCommentsComponent}
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
