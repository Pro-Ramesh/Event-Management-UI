import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { AddEventComponent } from './add-event/add-event.component';


const routes: Routes = [
  {
    path: '',
    component: EventListComponent
  }, {
    path: 'event',
    component:EventListComponent
  },{
    path: 'addevent',
    component:AddEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
