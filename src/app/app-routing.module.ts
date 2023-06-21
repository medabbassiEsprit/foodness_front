import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './layout/home/home-component/home-component.component';
import { LoginComponentComponent } from './layout/login/login-component/login-component.component';
import { RegisterComponentComponent } from './layout/register/register-component/register-component.component';
import { HeaderComponentComponent } from './layout/header/header-component/header-component.component';
import { AdminComponentComponent } from './dashborad/admin/admin-component/admin-component.component';


const routes: Routes = [
  {path:'header',component:HeaderComponentComponent},
  { path: 'home', component: HomeComponentComponent},
  {path:'login' , component:LoginComponentComponent},
  {path:'register',component:RegisterComponentComponent},
  {path:'admin',component:AdminComponentComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }



];

=======
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewReclamationComponent } from './view-reclamation/view-reclamation.component';


const routes: Routes = [
  {path:'products',component:ViewReclamationComponent},


];
>>>>>>> origin/origin/recBranch
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
