import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

let routs: Routes = [

]

@NgModule({
    imports: [
      RouterModule.forRoot(routs)
    ],
    exports: [
      RouterModule
    ]
  }
)
export class AppRoutingModule {
}
