import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponentComponent } from './layout/header/header-component/header-component.component';
import { FooterComponentComponent } from './layout/footer/footer-component/footer-component.component';
import { HomeComponentComponent } from './layout/home/home-component/home-component.component';
import { LoginComponentComponent } from './layout/login/login-component/login-component.component';
import { RegisterComponentComponent } from './layout/register/register-component/register-component.component';
import { AdminComponentComponent } from './dashborad/admin/admin-component/admin-component.component';

import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventService } from './services/event.service';
import { EventComponent } from './layout/event/event.component';
import { EventAdminComponent } from './dashborad/event-admin/event-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEventComponent } from './add-event/add-event.component';
import { ParticipationComponent } from './participation/participation.component';
import { TypeeventComponent } from './dashborad/typeevent/typeevent.component';
import { AddTypeEventComponent } from './dashborad/add-type-event/add-type-event.component';
import { TestImageComponent } from './test-image/test-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    AdminComponentComponent,
    EventComponent,
    EventAdminComponent,
    AddEventComponent,
    ParticipationComponent,
    TypeeventComponent,
    AddTypeEventComponent,
    TestImageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
