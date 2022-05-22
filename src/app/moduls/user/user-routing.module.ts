import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UserResolver} from "./services";

const routes: Routes = [
  {path:'', component:UsersComponent,children:[
      {
        path:'user.details.page/:id', component: UserDetailsComponent,
        resolve:{userData: UserResolver}
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
