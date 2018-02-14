import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JourneysComponent } from '../journeys/journeys.component';
import { TaskAccordionComponent } from '../journeys/task-accordion.component';
import { LastscreenComponent } from '../lastscreen/lastscreen.component';
import { RouteGuardService } from '../services/route-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'journeys', component: JourneysComponent },
        { path: 'journeys/:name', 
          canActivate: [ RouteGuardService ],
          component: TaskAccordionComponent },
        { path: 'journeys/:journey/:challenge', component: LastscreenComponent}
    ])
  ],
  exports: [ RouterModule ]
})

export class JourneyRoutingModule { }