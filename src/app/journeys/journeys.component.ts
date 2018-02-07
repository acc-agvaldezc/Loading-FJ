import { Component, OnInit } from '@angular/core';
import { JourneysService } from '../services/journeys.service';
import { IJourney, IUserJourneys } from '../interfaces/journeys';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.css']
})

export class JourneysComponent implements OnInit {
  
  userJourneys: IUserJourneys;
  journeys: IJourney[];
  
  constructor(private _journeyService: JourneysService, private _config: NgbProgressbarConfig) { 
    _config.max = 100;
    _config.height = '125px';
    _config.type = 'danger';

    this.userJourneys = this._journeyService.getUserJourneys();
    this.journeys = this.userJourneys.journeys;
  }

  ngOnInit() {
    console.log(this.userJourneys);
    console.log(this.journeys);
  }
}
