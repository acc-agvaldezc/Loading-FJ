import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { JourneysService } from '../services/journeys.service';

import { JourneysComponent } from './journeys.component';
import { TaskAccordionComponent } from './task-accordion.component';
import { JourneyRoutingModule } from '../router/journey-routing.module';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapsComponent } from '../google-maps/google-maps.component';
import { GraficoComponent } from '../grafico/grafico.component';
import { ChartsModule } from 'ng2-charts';
import { GalleryComponent } from '../gallery/gallery.component';
import { LastscreenComponent } from '../lastscreen/lastscreen.component';
import { HoursPipe } from './hours.pipe';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    JourneyRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAio5BHzYvZbgt7EVXXIyQdM5sL9fb5atU'
    }),
    ChartsModule
  ],
  declarations: [
    JourneysComponent,
    TaskAccordionComponent,
    GoogleMapsComponent,
    GraficoComponent,
    GalleryComponent,
    LastscreenComponent,
    HoursPipe
  ],
  providers: [
    JourneysService
  ],
  exports: [
    JourneysComponent
  ]
})
export class JourneysModule { }
