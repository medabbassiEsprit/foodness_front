import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './layout/header/header-component/header-component.component';
import { FooterComponentComponent } from './layout/footer/footer-component/footer-component.component';
import { HomeComponentComponent } from './layout/home/home-component/home-component.component';
import { LoginComponentComponent } from './layout/login/login-component/login-component.component';
import { RegisterComponentComponent } from './layout/register/register-component/register-component.component';
import { AdminComponentComponent } from './dashborad/admin/admin-component/admin-component.component';
=======
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewReclamationComponent } from './view-reclamation/view-reclamation.component';
>>>>>>> origin/origin/recBranch

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    AdminComponentComponent
  ],
  imports: [
    BrowserModule,
=======
    ViewReclamationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
>>>>>>> origin/origin/recBranch
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
