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
import { ViewReclamationComponent } from './view-reclamation/view-reclamation.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { ReclamationPopupComponent } from './reclamation-popup/reclamation-popup.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserSpaceComponent } from './user-space/user-space.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    AdminComponentComponent,
    ViewReclamationComponent,
    UserSpaceComponent,
    ReclamationPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
