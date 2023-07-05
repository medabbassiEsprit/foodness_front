import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponentComponent } from './layout/header/header-component/header-component.component';
import { FooterComponentComponent } from './layout/footer/footer-component/footer-component.component';
import { HomeComponentComponent } from './layout/home/home-component/home-component.component';
import { LoginComponentComponent } from './layout/login/login-component/login-component.component';
import { RegisterComponentComponent } from './layout/register/register-component/register-component.component';
import { AdminComponentComponent } from './dashborad/admin/admin-component/admin-component.component';
import { NewplatComponent } from './newplat/newplat.component';
//import { MenuPlatComponent } from './newmenu/newmenu.component';
import { RouterModule } from '@angular/router';
import { PlatviewComponent } from './platview/platview.component';
import { ClientviewComponent } from './clientview/clientview.component';
import { NewMenuComponent } from './newmenu/newmenu.component';
import { MenuviewComponent } from './menuview/menuview.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    AdminComponentComponent,
    NewplatComponent,
    PlatviewComponent,
    NewMenuComponent,
    ClientviewComponent,
    MenuviewComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
