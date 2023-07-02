import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './layout/home/home-component/home-component.component';
import { LoginComponentComponent } from './layout/login/login-component/login-component.component';
import { RegisterComponentComponent } from './layout/register/register-component/register-component.component';
import { HeaderComponentComponent } from './layout/header/header-component/header-component.component';
import { AdminComponentComponent } from './dashborad/admin/admin-component/admin-component.component';
import { ViewReclamationComponent } from './view-reclamation/view-reclamation.component';
import { UserSpaceComponent } from './user-space/user-space.component';


const routes: Routes = [
  {path:'header',component:HeaderComponentComponent},
  { path: 'home', component: HomeComponentComponent},
  {path:'login' , component:LoginComponentComponent},
  {path:'register',component:RegisterComponentComponent},
  {path:'home/spaceClient', component:UserSpaceComponent},
  {path:'admin',component:AdminComponentComponent},
  {path:'admin/reclamation', component:ViewReclamationComponent},

  { path: '', redirectTo: 'home/spaceClient', pathMatch: 'full' },
  { path: '**', redirectTo: 'home/spaceClient' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
