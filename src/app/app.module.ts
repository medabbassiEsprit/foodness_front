import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EventComponent } from './event/event.component';
import { EventService } from './services/event.service';
import { AddEventComponent } from './add-event/add-event.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    FooterComponent,
    HeaderComponent,
    AddEventComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
