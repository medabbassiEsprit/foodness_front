import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './layout/header/header-component/header-component.component';
import { FooterComponentComponent } from './layout/footer/footer-component/footer-component.component';
import { HomeComponentComponent } from './layout/home/home-component/home-component.component';
import { LoginComponentComponent } from './layout/login/login-component/login-component.component';
import { RegisterComponentComponent } from './layout/register/register-component/register-component.component';
import { AdminComponentComponent } from './dashborad/admin/admin-component/admin-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormationComponent } from './layout/formation/formation.component';
import { FormsModule } from '@angular/forms';
import { ViewTypeComponent } from './layout/view-type/view-type.component';
import { AddFormationComponent } from './dashborad/add-formation/add-formation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateFormationComponent } from './layout/update-formation/update-formation.component';
import { CommonModule } from '@angular/common';
import { GererFormationComponent } from './layout/gerer-formation/gerer-formation.component';
import { TypeFormationComponent } from './dashborad/type-formation/type-formation.component';
import { ViewTypeFormationComponent } from './dashborad/view-type-formation/view-type-formation.component';
import { UpdateTypeFormationComponent } from './dashborad/update-type-formation/update-type-formation.component';
import { AddQuizComponent } from './dashborad/add-quiz/add-quiz.component';
import { ViewQuizComponent } from './dashborad/view-quiz/view-quiz.component';
import { ClientQuizViewComponent } from './dashborad/client-quiz-view/client-quiz-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    AdminComponentComponent,
    FormationComponent,
    ViewTypeComponent,
    AddFormationComponent,
    UpdateFormationComponent,
    GererFormationComponent,
    TypeFormationComponent,
    ViewTypeFormationComponent,
    UpdateTypeFormationComponent,
    AddQuizComponent,
    ViewQuizComponent,
    ClientQuizViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
