import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {PostComponent} from './components/post/post.component';
import {PostsComponent} from './components/posts/posts.component';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentComponent} from './components/comment/comment.component';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from "@angular/router";
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostComponent,
    PostsComponent,
    CommentsComponent,
    CommentComponent,
    HomeComponent,
    UserDetailsComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home.page', component: HomeComponent},
      {
        path: 'users.page', component: UsersComponent,
        children: [
          {path: 'user.details.page/:id', component: UserDetailsComponent}
        ]
      },
      {
        path: 'posts.page', component: PostsComponent,
        children: [
          {
            path: 'post.details.page/:data', component: PostDetailsComponent,
            children: [
              {path: 'comments.page/:id', component: CommentsComponent}
            ]
          }
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
