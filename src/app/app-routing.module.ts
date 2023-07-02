import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewReclamationComponent } from './view-reclamation/view-reclamation.component';
import { EventComponent } from './event/event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { HomeComponentComponent } from './layout/home/home-component/home-component.component';
import { AdminComponentComponent } from './dashborad/admin/admin-component/admin-component.component';
import { LoginComponentComponent } from './layout/login/login-component/login-component.component';
import { EventAdminComponent } from './layout/event-admin/event-admin.component';
import { ParticipationComponent } from './participation/participation.component';
import { TypeeventComponent } from './typeevent/typeevent.component';
import { AddTypeEventComponent } from './add-type-event/add-type-event.component';



const routes: Routes = [
  {path:'products',component:ViewReclamationComponent},
  {path:'event',component:EventComponent},
  {path:'admin/events/addEvent',component:AddEventComponent},
  {path:'home',component:HomeComponentComponent},
  {path:'admin',component:AdminComponentComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'login',component:LoginComponentComponent},
  {path:'admin/events',component:EventAdminComponent},
  { path: 'events/:eventId/participation', component: ParticipationComponent },
  {path:'admin/eventType',component:TypeeventComponent},
  {path:'admin/eventType/addType',component:AddTypeEventComponent},


  {path:'**',redirectTo:'/home',pathMatch:'full'},







];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
