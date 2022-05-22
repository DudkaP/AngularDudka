import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentsComponent} from "./components/comments/comments.component";
import {BackGuard} from "../../guards";

const routes: Routes = [
  {path: '', component: CommentsComponent, canDeactivate:[BackGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule {
}
