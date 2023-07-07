import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './layout/home/home-component/home-component.component';
import { LoginComponentComponent } from './layout/login/login-component/login-component.component';
import { RegisterComponentComponent } from './layout/register/register-component/register-component.component';
import { HeaderComponentComponent } from './layout/header/header-component/header-component.component';
import { AdminComponentComponent } from './dashborad/admin/admin-component/admin-component.component';
import { FormationComponent } from './layout/formation/formation.component';
import { ViewTypeComponent } from './layout/view-type/view-type.component';
import { AddFormationComponent } from './dashborad/add-formation/add-formation.component';
import { GererFormationComponent } from './layout/gerer-formation/gerer-formation.component';
import { TypeFormationComponent } from './dashborad/type-formation/type-formation.component';
import { ViewTypeFormationComponent } from './dashborad/view-type-formation/view-type-formation.component';
import { AddQuizComponent } from './dashborad/add-quiz/add-quiz.component';
import { ViewQuizComponent } from './dashborad/view-quiz/view-quiz.component';
import { ClientQuizViewComponent } from './dashborad/client-quiz-view/client-quiz-view.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponentComponent },
  { path: 'home', component: HomeComponentComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: 'register', component: RegisterComponentComponent },
  { path: 'admin', component: AdminComponentComponent },
  { path: 'admin/formation', component: FormationComponent },
  { path: 'admin/Type', component: ViewTypeComponent },
  { path: 'admin/formation/addFormation', component: AddFormationComponent },
  { path: 'admin/typeFormation', component: TypeFormationComponent },
  { path: 'admin/viewTypeFormation', component: ViewTypeFormationComponent },

  {
    path: 'admin/formation/gerer_formation/:id',
    component: GererFormationComponent,
  },
  { path:'quiz',component:AddQuizComponent},
  {path:'seequiz', component:ViewQuizComponent},
{path:'quizClient',component:ClientQuizViewComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
