import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JourneysService } from '../services/journeys.service';
import { RouterModule } from '@angular/router';
import { JourneysComponent } from './journeys.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild([
      {path: 'journeys', component: JourneysComponent}
    ])
  ],
  declarations: [
    JourneysComponent
  ],
  providers: [
    JourneysService
  ],
  exports: [
    JourneysComponent
  ]
})
export class JourneysModule { }
