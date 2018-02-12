import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JourneysComponent } from '../journeys/journeys.component';
import { TaskAccordionComponent } from '../journeys/task-accordion.component';
import { LastscreenComponent } from '../lastscreen/lastscreen.component';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'journeys', component: JourneysComponent },
        { path: 'journeys/:name', component: TaskAccordionComponent },
        { path: 'journeys/detail/:challenge', component: LastscreenComponent}
    ])
  ],
  exports: [ RouterModule ]
})

export class JourneyRoutingModule { }