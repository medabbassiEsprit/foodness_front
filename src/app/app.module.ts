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
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './layout/forget-password/forget-password.component';
import { ResetPasswordComponent } from './layout/reset-password/reset-password.component';
import { UserDashComponent } from './dashborad/user-dash/user-dash.component';
import { RoleDashComponent } from './dashborad/role-dash/role-dash.component';
import { UpdateProfileComponent } from './layout/update-profile/update-profile.component';
import { UpdateDashComponent } from './dashborad/update-dash/update-dash.component';
import { DatePipe } from '@angular/common';
import { DateFormatPipe } from './date-format.pipe';
import { DashboardComponent } from './layout/Don/dashboard/dashboard.component';
import { ParticiperComponent } from './layout/Don/participer/participer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    AdminComponentComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    UserDashComponent,
    RoleDashComponent,
    UpdateProfileComponent,
    UpdateDashComponent,
    DateFormatPipe,
    DashboardComponent,
    ParticiperComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
