import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './layout/home/home-component/home-component.component';
import { LoginComponentComponent } from './layout/login/login-component/login-component.component';
import { RegisterComponentComponent } from './layout/register/register-component/register-component.component';
import { HeaderComponentComponent } from './layout/header/header-component/header-component.component';
import { AdminComponentComponent } from './dashborad/admin/admin-component/admin-component.component';
import { ForgetPasswordComponent } from './layout/forget-password/forget-password.component';
import { ResetPasswordComponent } from './layout/reset-password/reset-password.component';
import { UserDashComponent } from './dashborad/user-dash/user-dash.component';
import { RoleDashComponent } from './dashborad/role-dash/role-dash.component';
import { UpdateProfileComponent } from './layout/update-profile/update-profile.component';
import { UpdateDashComponent } from './dashborad/update-dash/update-dash.component';
import { AuthGuard } from './dashborad/auth.guard';
import { DashboardComponent } from './layout/Don/dashboard/dashboard.component';
import { OffreComponent } from './layout/offre/offre.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponentComponent },
  { path: 'home', component: HomeComponentComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: 'forgPass', component: ForgetPasswordComponent },
  { path: 'resetpassword', component: ResetPasswordComponent },
  { path: 'user', component: UserDashComponent },
  { path: 'editProfile', component: UpdateProfileComponent },
  { path: 'update/:id', component: UpdateDashComponent },
  { path: 'role', component: RoleDashComponent },
  { path: 'don', component: DashboardComponent },
  { path: 'register', component: RegisterComponentComponent },
  { path: 'offre', component: OffreComponent },
  { path: 'admin', component: AdminComponentComponent },
  // {path:'admin',component:AdminComponentComponent,canActivate: [AuthGuard],data: {role: 'ROLE_ADMIN'} },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
