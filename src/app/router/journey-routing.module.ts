import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JourneysComponent } from '../journeys/journeys.component';
import { TaskAccordionComponent } from '../journeys/task-accordion.component';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'journeys', component: JourneysComponent },
        { path: 'journeys/:name', component: TaskAccordionComponent }
    ])
  ],
  exports: [ RouterModule ]
})

export class JourneyRoutingModule { }