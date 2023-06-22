import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { NewplatComponent } from './newplat/newplat.component';

const routes: Routes = [ {path:'products',component:NewplatComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
